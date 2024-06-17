const express = require('express');
const { authenticateToken } = require('../middleware/authenticateToken');
const { registerAdmin, loginAdmin, logoutAdmin, updateAdminProfile } = require('../controllers/adminControllers');
const { getAllUsers, getUserById, editUser, deleteUser } = require('../controllers/adminControllers');
const { getAllAdmins, getAdminById, editAdmin, deleteAdmin } = require('../controllers/adminControllers');
const router = express.Router();

router.post('/registerAdmin', registerAdmin);
router.post('/loginAdmin', loginAdmin);
router.get('/logoutAdmin', logoutAdmin);
router.put('/update-profile', authenticateToken, updateAdminProfile);
router.get('/dataUsers', authenticateToken, getAllUsers);
router.get('/dataUsers/:id', authenticateToken, getUserById);
router.put('/dataUsers/:id', authenticateToken, editUser);
router.delete('/dataUsers/:id', authenticateToken, deleteUser);
router.get('/dataAdmins', authenticateToken, getAllAdmins);
router.get('/dataAdmins/:id', authenticateToken, getAdminById);
router.put('/dataAdmins/:id', authenticateToken, editAdmin);
router.delete('/dataAdmins/:id', authenticateToken, deleteAdmin);

module.exports = router;