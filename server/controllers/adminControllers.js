const Admin = require('../models/Admin');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const generateAccessToken = (id, role) => {
    return jwt.sign({ id, role }, process.env.JWT_SEC, {
        expiresIn: '1d'
    });
};

const sendAuthToken = (admin, statusCode, res) => {
    const authToken = generateAccessToken(admin._id, admin.role);
    const cookieOptions = {
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
        httpOnly: true
    };
    res.cookie('jwt', authToken, cookieOptions);
    admin.password_admin = undefined;
    res.status(statusCode).json({
        success: true,
        authToken,
        data: admin
    });
};

const registerAdmin = async (req, res) => {
    try {
        const { name_admin, username_admin, email_admin, password_admin, dob_admin, phone_admin, role } = req.body;
        const createAdmin = await Admin.create({
            name_admin,
            username_admin,
            email_admin,
            password_admin,
            dob_admin,
            phone_admin,
            role
        });
        sendAuthToken(createAdmin, 201, res);
    } catch (error) {
        return res.status(400).json({
            message: "Error",
            error
        });
    }
};

const loginAdmin = async (req, res) => {
    try {
        const { username_admin, password_admin } = req.body;
        if (!username_admin || !password_admin) {
            return res.status(400).json({
                message: "Username dan password tidak boleh kosong"
            });
        }
        const adminData = await Admin.findOne({ username_admin });
        if (!adminData) {
            return res.status(400).json({
                message: "Username belum terdaftar"
            });
        }
        const passValid = await bcrypt.compare(password_admin, adminData.password_admin);
        if (adminData && passValid) {
            sendAuthToken(adminData, 200, res);
        } else {
            return res.status(400).json({
                message: "Password salah"
            });
        }
    } catch (error) {
        return res.status(400).json({
            message: "Error",
            error: error.message
        });
    }
};

const updateAdminProfile = async (req, res) => {
    try {
        const adminId = req.user.id;
        const updatedData = req.body;
        await Admin.findByIdAndUpdate(adminId, updatedData);
        res.status(200).json({ success: true, message: 'Profil berhasil diperbarui' });
    } catch (error) {
        console.error('Update profile error:', error);
        res.status(500).json({ success: false, message: 'Terjadi kesalahan saat memperbarui profil admin' });
    }
};

const logoutAdmin = (req, res) => {
    res.clearCookie('jwt');
    res.status(200).json({ success: true, message: 'Logout berhasil' });
};

const getAdmin = (req, res) => {
    res.status(200).json({ success: true, message: 'Berhasil mendapatkan data admin' });
};

module.exports = { registerAdmin, loginAdmin, logoutAdmin, getAdmin, updateAdminProfile };
