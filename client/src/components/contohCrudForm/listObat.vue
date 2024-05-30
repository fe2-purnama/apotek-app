<template>
    <div>
      <h1>Daftar Obat</h1>
      <table>
        <thead>
          <tr>
            <th>Nama Obat</th>
            <th>Harga Obat</th>
            <th>Kategori Obat</th>
            <th>Deskripsi Obat</th>
            <th>Stok Obat</th>
            <th>Tanggal Kadaluarsa Obat</th>
            <th>Gambar Obat</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="obat in obatList" :key="obat._id">
            <td>{{ obat.nama_obat }}</td>
            <td>{{ obat.harga_obat }}</td>
            <td>{{ obat.kategori_obat }}</td>
            <td>{{ obat.deskripsi_obat }}</td>
            <td>{{ obat.stok_obat }}</td>
            <td>{{ obat.tanggal_kadaluarsa_obat }}</td>
            <td>
              <img :src="'http://localhost:3000/public/img/obat/' + obat.gambar_obat" alt="Gambar Obat" width="150">
            </td>
            <td>
              <button @click="editObat(obat._id)">Edit</button>
              <button @click="deleteObat(obat._id)">Hapus</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        obatList: []
      };
    },
    async created() {
      try {
        const response = await axios.get('http://localhost:3000/api/obat');
        this.obatList = response.data.data;
      } catch (error) {
        console.error('Terjadi kesalahan:', error.response.data);
      }
    },
    methods: {
      async deleteObat(obatId) {
        try {
          await axios.delete(`http://localhost:3000/api/obat/${obatId}`);
          console.log('Obat berhasil dihapus');
          this.obatList = this.obatList.filter(obat => obat._id !== obatId);
        } catch (error) {
          console.error('Gagal menghapus obat:', error.response.data);
        }
      },
      editObat(obatId) {
        this.$router.push(`/editObat/${obatId}`);
      }
    }
  };
  </script>
  