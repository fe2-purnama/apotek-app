const Obat = require('../models/Obat');
const path = require('path');
const fs = require('fs');

const getAllObat = async (req, res) => {
    try {
        const searchQuery = req.query.search || '';
        const regex = new RegExp(searchQuery, 'i');
        
        const obatList = await Obat.find({
            $or: [
                { nama_obat: { $regex: regex } },
                { kategori_obat: { $regex: regex } },
                { deskripsi_obat: { $regex: regex } }
            ]
        });
        res.status(200).json({
            success: true,
            data: obatList
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
    });
}
};

const getObatById = async (req, res) => {
    try {
        const obat = await Obat.findById(req.params.id);
        if (!obat) {
            return res.status(404).json({ success: false, message: "Obat tidak ditemukan" });
        }
        res.status(200).json({ success: true, data: obat });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

const addObat = async (req, res) => {
    try {
        const {
            nama_obat,
            harga_obat,
            kategori_obat,
            deskripsi_obat,
            komposisi_obat,
            dosis_obat,
            efeksamping_obat,
            golongan_obat,
            manufaktur_obat,
            stok_obat,
            tanggal_kadaluarsa_obat
        } = req.body;

        const gambar_obat = req.file.filename;

        const newObat = await Obat.create({
            nama_obat,
            harga_obat,
            kategori_obat,
            deskripsi_obat,
            komposisi_obat,
            dosis_obat,
            efeksamping_obat,
            golongan_obat,
            manufaktur_obat,
            stok_obat,
            tanggal_kadaluarsa_obat,
            gambar_obat
        });

        res.status(201).json({
            success: true,
            data: newObat
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
};

const editObat = async (req, res) => {
    try {
        const obatId = req.params.id;
        const updatedObat = await Obat.findByIdAndUpdate(obatId, req.body, { new: true });
        res.status(200).json({ success: true, data: updatedObat });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

const deleteObat = async (req, res) => {
    try {
        const obatId = req.params.id;
        const obat = await Obat.findById(obatId);
        if (!obat) {
            return res.status(404).json({ success: false, message: "Obat tidak ditemukan" });
        }
        fs.unlinkSync(`public/img/obat/${obat.gambar_obat}`);
        await Obat.findByIdAndDelete(obatId);
        res.status(200).json({ success: true, message: 'Obat berhasil dihapus' });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

module.exports = { getAllObat, addObat, editObat, deleteObat, getObatById  };

