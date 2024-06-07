const express = require('express');
const { authenticateToken } = require('../middleware/authenticateToken');
const { registerAdmin, loginAdmin, logoutAdmin, getAdmin, updateAdminProfile } = require('../controllers/adminControllers');
const router = express.Router();

router.post('/registerAdmin', registerAdmin);
router.post('/loginAdmin', loginAdmin);
router.get('/logoutAdmin', logoutAdmin);
router.get('/getAdmin', getAdmin);
router.put('/update-profile', authenticateToken, updateAdminProfile);

module.exports = router;