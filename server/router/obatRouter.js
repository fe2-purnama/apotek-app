const express = require('express');
const { getAllObat, addObat, editObat, deleteObat, getObatById } = require('../controllers/obatController');
const multer = require('multer');
const router = express.Router();
const fs = require('fs')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/img/obat');
    },
    filename: function (req, file, cb) {
      const originalName = file.originalname;
      const date = new Date().toISOString().slice(0, 10).replace(/-/g, '');
      const timestamp = new Date().getTime();
      const uniqueFileName = `${date}${timestamp}-${originalName}`;
      cb(null, uniqueFileName);
    }
  });

const upload = multer({ storage: storage });

router.get('/obat', getAllObat);
router.post('/obat', upload.single('gambar_obat'), addObat);
router.get('/obat/:id', getObatById);
router.put('/obat/:id', upload.single('gambar_obat'), editObat);
router.delete('/obat/:id', deleteObat);
router.post('/uploadNewImageObat', upload.single('image'), (req, res) => {
    try {
        const imageUrl = req.file.filename;
        res.status(200).json({ success: true, imageUrl });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});
router.delete('/deleteImage', (req, res) => {
    try {
        const imageUrl = req.query.url;
        fs.unlinkSync(`public/img/obat/${imageUrl}`);
        res.status(200).json({ success: true, message: 'Gambar berhasil dihapus' });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

module.exports = router;
