const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const generateAccessToken = id => {
    return jwt.sign({id}, process.env.JWT_SEC, {
        expiresIn: '1d'
    })
}

const sendAuthToken  = (user, statusCode, res) => {
    const authToken = generateAccessToken(user._id)
    const cookieOptions = {
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
        httpOnly: true
    }
    res.cookie('jwt', authToken, cookieOptions)
    user.password_user = undefined;
    res.status(statusCode).json({
        success: true,
        authToken,
        data: user
    })
}

const registerUser = async (req, res) => {
    try {
        const { name_user, username_user, email_user, password_user, dob_user, phone_user } = req.body;
        const createUser = await User.create({
            name_user,
            username_user,
            email_user,
            password_user,
            dob_user,
            phone_user
        });
        sendAuthToken(createUser, 201, res);
    } catch (error) {
        return res.status(400).json({
            message: "Error",
            error
        });
    }
};

const loginUser = async (req, res) => {
    try {
        const { username_user, password_user } = req.body;
        if (!username_user || !password_user) {
            return res.status(400).json({
                message: "Username dan password tidak boleh kosong"
            });
        }
        const userData = await User.findOne({ username_user });
        if (!userData) {
            return res.status(400).json({
                message: "Username belum terdaftar"
            });
        }
        const passValid = await bcrypt.compare(password_user, userData.password_user);
        if (userData && passValid) {
            sendAuthToken(userData, 200, res);
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

const updateProfile = async (req, res) => {
    try {
        const userId = req.user.id;
        const updatedData = req.body;
        await User.findByIdAndUpdate(userId, updatedData);
        res.status(200).json({ success: true, message: 'Profil berhasil diperbarui' });
    } catch (error) {
        console.error('Update profile error:', error);
        res.status(500).json({ success: false, message: 'Terjadi kesalahan saat memperbarui profil pengguna' });
    }
};

const logoutUser = (req, res) => {
    res.clearCookie('jwt');
    res.status(200).json({ success: true, message: 'Logout berhasil' });
}

const getUser = (req, res) => {
    res.send('Berhasil');
    res.status(200).json({ success: true, message: 'Logout berhasil' });
}

module.exports = { registerUser, loginUser, logoutUser, getUser, updateProfile };