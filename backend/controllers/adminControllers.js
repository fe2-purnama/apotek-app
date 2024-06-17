const Admin = require('../models/Admin');
const User = require('../models/User'); 
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

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({ success: true, data: users });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error getting users', error: error.message });
    }
};

const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }
        res.status(200).json({ success: true, data: user });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error getting user', error: error.message });
    }
};

const editUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!updatedUser) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }
        res.status(200).json({ success: true, data: updatedUser });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error updating user', error: error.message });
    }
};

const deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }
        res.status(200).json({ success: true, message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error deleting user', error: error.message });
    }
};

const getAllAdmins = async (req, res) => {
    try {
        let admins;
        if (req.user.role === 'superadmin') {
            admins = await Admin.find().select('+password_admin');
        } else {
            admins = await Admin.find().select('-password_admin');
        }
        res.status(200).json({ success: true, data: admins });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error getting admins', error: error.message });
    }
};

const getAdminById = async (req, res) => {
    try {
        let admin;
        if (req.user.role === 'superadmin') {
            admin = await Admin.findById(req.params.id).select('+password_admin');
        } else {
            admin = await Admin.findById(req.params.id).select('-password_admin');
        }
        if (!admin) {
            return res.status(404).json({ success: false, message: 'Admin not found' });
        }
        res.status(200).json({ success: true, data: admin });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error getting admin', error: error.message });
    }
};

const editAdmin = async (req, res) => {
    try {
        if (req.user.role !== 'superadmin') {
            return res.status(403).json({ success: false, message: 'Only superadmin can edit admin' });
        }
        const updatedAdmin = await Admin.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!updatedAdmin) {
            return res.status(404).json({ success: false, message: 'Admin not found' });
        }
        res.status(200).json({ success: true, data: updatedAdmin });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error updating admin', error: error.message });
    }
};

const deleteAdmin = async (req, res) => {
    try {
        if (req.user.role !== 'superadmin') {
            return res.status(403).json({ success: false, message: 'Only superadmin can delete admin' });
        }
        const deletedAdmin = await Admin.findByIdAndDelete(req.params.id);
        if (!deletedAdmin) {
            return res.status(404).json({ success: false, message: 'Admin not found' });
        }
        res.status(200).json({ success: true, message: 'Admin deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error deleting admin', error: error.message });
    }
};

module.exports = { registerAdmin, loginAdmin, logoutAdmin, updateAdminProfile, getAllUsers, getUserById, editUser, deleteUser , getAllAdmins, getAdminById, editAdmin, deleteAdmin };
