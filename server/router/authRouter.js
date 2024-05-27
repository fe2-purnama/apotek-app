const express = require('express');
const { registerUser, loginUser, logoutUser, getUser, getAllProduk } = require('../controllers/authControllers');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/logout', logoutUser);
router.get('/getUser', getUser);
router.get('/produk', getAllProduk);

module.exports = router;

