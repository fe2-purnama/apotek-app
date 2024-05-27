const mongoose = require('mongoose')

const produkSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: [true, 'Nama produk harus diisi']
    },
    kategori: {
        type: String,
        required: [true, 'Kategori produk harus diisi']
    },
    harga: {
        type: Number,
        required: [true, 'Harga produk harus diisi']
    },
    deskripsi: {
        type: String,
        required: [true, 'Deskripsi produk harus diisi']
    },
    tanggalKedaluwarsa: {
        type: Date,
        required: [true, 'Tanggal kedaluwarsa harus diisi']
    },
    memerlukanResep: {
        type: Boolean,
        required: [true, 'Informasi memerlukan resep harus diisi']
    }
});

const produk = mongoose.model('Produk', produkSchema)

module.exports = produk;
