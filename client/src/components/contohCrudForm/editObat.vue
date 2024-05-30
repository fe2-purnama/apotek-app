<template>
    <div>
      <h1>Edit Obat</h1>
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
        <img v-if="form.gambar_obat" :src="'http://localhost:3000/public/img/obat/' + form.gambar_obat" alt="Gambar Obat" width="250">
        <input type="file" id="gambar_obat" @change="handleFileUpload">
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
          _id: '',
          nama_obat: '',
          harga_obat: '',
          kategori_obat: '',
          deskripsi_obat: '',
          stok_obat: '',
          tanggal_kadaluarsa_obat: '',
          gambar_obat: '',
          komposisi_obat: '',
          efeksamping_obat: '',
          manufaktur_obat: '',
          dosis_obat: ''
        },
        newImage: null
      };
    },
    async created() {
        try {
            const obatId = this.$route.params.id;
            const response = await axios.get(`http://localhost:3000/api/obat/${obatId}`);
            this.form = response.data.data;
        } catch (error) {
            console.error('Terjadi kesalahan:', error.response.data);
        }
    },
    methods: {
      async submitForm() {
        try {
          if (this.newImage) {
            await this.deleteImage();
            this.form.gambar_obat = await this.uploadImage(this.newImage);
          }
          const obatId = this.form._id;
          const response = await axios.put(`http://localhost:3000/api/obat/${obatId}`, this.form);
          console.log('Obat berhasil diedit:', response.data);
          this.$router.push('/list-obat');
        } catch (error) {
          console.error('Terjadi kesalahan:', error.response.data);
        }
      },
      handleFileUpload(event) {
        this.newImage = event.target.files[0];
      },
      async uploadImage(image) {
        const formData = new FormData();
        formData.append('image', image);
        const response = await axios.post('http://localhost:3000/api/uploadNewImageObat', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        return response.data.imageUrl;
      },
      async deleteImage() {
        const imageUrl = this.form.gambar_obat;
        try {
          await axios.delete(`http://localhost:3000/api/deleteImage?url=${imageUrl}`);
          console.log('Gambar lama berhasil dihapus');
          this.form.gambar_obat = '';
        } catch (error) {
          console.error('Gagal menghapus gambar lama:', error.response.data);
        }
      }
    }
  };
  </script>
  