const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const Produk = require('../models/Produk')

const generateAccessToken = id => {
    return jwt.sign({id}, process.env.JWT_SEC, {
        expiresIn: '1d'
    })
}

const sendAuthToken  = (user, statusCode, res) => {
    const token = generateAccessToken(user.id)
    const cookieOptions = {
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production' ? true : false
    }
    res.cookie('jwt', token, cookieOptions)
    user.password = undefined
    res.status(statusCode).json({
        success: true,
        token,
        data: user
    })
}

const registerUser = async (req, res) => {
    try {
        const { name, username, email, password, dob, phone } = req.body;
        const createUser = await User.create({
            name,
            username,
            email,
            password,
            dob,
            phone
        });
        sendAuthToken(createUser, 201, res);
    } catch (error) {
        return res.status(400).json({
            message: "Error",
            error
        })
    }
}

const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({
                message: "Username dan password tidak boleh kosong"
            });
        }
        const userData = await User.findOne({ username });
        if (!userData) {
            return res.status(400).json({
                message: "Username belum terdaftar"
            });
        }
        const passValid = await bcrypt.compare(password, userData.password);
        if (userData && passValid) {
            sendAuthToken(userData, 200, res)
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
}



const logoutUser = (req, res) => {
    res.send('Logout Berhasil')
}

const getUser = (req, res) => {
    res.send('Berhasil')
}

// Menampilkan semua produk
const getAllProduk = async (req, res) => {
    try {
        const produkList = await Produk.find();
        res.status(200).json({
            success: true,
            data: produkList
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

module.exports = { registerUser, loginUser, logoutUser, getUser, getAllProduk };