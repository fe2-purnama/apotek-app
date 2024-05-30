const mongoose = require('mongoose');

const obatSchema = new mongoose.Schema({
    nama_obat: {
        type: String,
        required: [true, 'Nama obat harus diisi']
    },
    harga_obat: {
        type: Number,
        required: [true, 'Harga obat harus diisi']
    },
    kategori_obat: {
        type: String,
        required: [true, 'Kategori obat harus diisi']
    },
    deskripsi_obat: {
        type: String,
        required: [true, 'Deskripsi obat harus diisi']
    },
    komposisi_obat: String,
    dosis_obat: String,
    efeksamping_obat: String,
    golongan_obat: String,
    manufaktur_obat: String,
    stok_obat: {
        type: Number,
        required: [true, 'Stok obat harus diisi']
    },
    tanggal_kadaluarsa_obat: {
        type: String,
        required: [true, 'Tanggal kadaluarsa obat harus diisi']
    },
    gambar_obat: {
        type: String,
        required: true
    }
});

const Obat = mongoose.model('Obat', obatSchema);

module.exports = Obat;
