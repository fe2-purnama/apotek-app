<template>
    <div>
      <h1>Tambah Obat</h1>
      <form @submit.prevent="submitForm">
        <div>
          <label for="nama_obat">Nama Obat:</label>
          <input type="text" id="nama_obat" v-model="form.nama_obat" required>
        </div>
        <div>
          <label for="harga_obat">Harga Obat:</label>
          <input type="number" id="harga_obat" v-model="form.harga_obat" required>
        </div>
        <div>
          <label for="kategori_obat">Kategori Obat:</label>
          <input type="text" id="kategori_obat" v-model="form.kategori_obat" required>
        </div>
        <div>
          <label for="deskripsi_obat">Deskripsi Obat:</label>
          <textarea id="deskripsi_obat" v-model="form.deskripsi_obat" required></textarea>
        </div>
        <div>
          <label for="stok_obat">Stok Obat:</label>
          <input type="number" id="stok_obat" v-model="form.stok_obat" required>
        </div>
        <div>
          <label for="tanggal_kadaluarsa_obat">Tanggal Kadaluarsa:</label>
          <input type="date" id="tanggal_kadaluarsa_obat" v-model="form.tanggal_kadaluarsa_obat" required>
        </div>
        <div>
          <label for="gambar_obat">Gambar Obat:</label>
          <input type="file" id="gambar_obat" @change="handleFileUpload" required>
        </div>
        <div>
          <label for="komposisi_obat">Komposisi Obat:</label>
          <textarea id="komposisi_obat" v-model="form.komposisi_obat"></textarea>
        </div>
        <div>
          <label for="efeksamping_obat">Efek Samping Obat:</label>
          <textarea id="efeksamping_obat" v-model="form.efeksamping_obat"></textarea>
        </div>
        <div>
          <label for="manufaktur_obat">Manufaktur Obat:</label>
          <input type="text" id="manufaktur_obat" v-model="form.manufaktur_obat">
        </div>
        <div>
          <label for="dosis_obat">Dosis Obat:</label>
          <input type="text" id="dosis_obat" v-model="form.dosis_obat">
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        form: {
          nama_obat: '',
          harga_obat: '',
          kategori_obat: '',
          deskripsi_obat: '',
          stok_obat: '',
          tanggal_kadaluarsa_obat: '',
          gambar_obat: null,
          komposisi_obat: '',
          efeksamping_obat: '',
          manufaktur_obat: '',
          dosis_obat: ''
        }
      };
    },
    methods: {
      handleFileUpload(event) {
        this.form.gambar_obat = event.target.files[0];
      },
      async submitForm() {
        const formData = new FormData();
        formData.append('nama_obat', this.form.nama_obat);
        formData.append('harga_obat', this.form.harga_obat);
        formData.append('kategori_obat', this.form.kategori_obat);
        formData.append('deskripsi_obat', this.form.deskripsi_obat);
        formData.append('stok_obat', this.form.stok_obat);
        formData.append('tanggal_kadaluarsa_obat', this.form.tanggal_kadaluarsa_obat);
        formData.append('gambar_obat', this.form.gambar_obat);
        formData.append('komposisi_obat', this.form.komposisi_obat);
        formData.append('efeksamping_obat', this.form.efeksamping_obat);
        formData.append('manufaktur_obat', this.form.manufaktur_obat);
        formData.append('dosis_obat', this.form.dosis_obat);
  
        try {
          const response = await axios.post('http://localhost:3000/api/obat', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
          console.log('Obat berhasil ditambahkan:', response.data);
          this.$router.push('/list-obat');
        } catch (error) {
          console.error('Terjadi kesalahan:', error.response.data);
        }
      }
    }
  };
  </script>  