<template>
  <div>
    <h1>Edit Obat</h1>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name_product">Nama produk:</label>
        <input type="text" id="name_product" v-model="form.name_product" required>
      </div>
      <div>
        <label for="price_product">Harga produk:</label>
        <input type="number" id="price_product" v-model="form.price_product" required>
      </div>
      <div>
        <label for="category_product">Kategori produk:</label>
        <input type="text" id="category_product" v-model="form.category_product" required>
      </div>
      <div>
        <label for="description_product">Deskripsi produk:</label>
        <textarea id="description_product" v-model="form.description_product" required></textarea>
      </div>
      <div>
        <label for="stock_product">Stok produk:</label>
        <input type="number" id="stock_product" v-model="form.stock_product" required>
      </div>
      <div>
        <label for="expiry_date_product">Tanggal Kadaluarsa produk:</label>
        <input type="date" id="expiry_date_product" v-model="form.expiry_date_product" required>
      </div>
      <div>
      <label for="image_product">Gambar Obat:</label>
      <img v-if="form.image_product" :src="'http://localhost:6009/public/img/product/' + form.image_product" alt="Gambar Produk" width="250">
      <input type="file" id="image_product" @change="handleFileUpload">
      </div>
      <div>
        <label for="composition_product">Komposisi produk:</label>
        <textarea id="composition_product" v-model="form.composition_product"></textarea>
      </div>
      <div>
        <label for="sideeffects_product">Efek Samping produk:</label>
        <textarea id="sideeffects_product" v-model="form.sideeffects_product"></textarea>
      </div>
      <div>
        <label for="manufacture_product">Manufaktur produk:</label>
        <input type="text" id="manufacture_product" v-model="form.manufacture_product">
      </div>
      <div>
        <label for="dose_product">Dosis produk:</label>
        <input type="text" id="dose_product" v-model="form.dose_product">
      </div>
      <div>
        <label for="group_product">Golongan produk: (keras, bebas, bebas terbatas, narkotika, fitofarmaka, oht, herbal)</label>
        <input type="text" id="group_product" v-model="form.group_product">
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
        name_product: '',
        price_product: '',
        category_product: '',
        description_product: '',
        stock_product: '',
        expiry_date_product: '',
        image_product: '',
        composition_product: '',
        sideeffects_product: '',
        manufacture_product: '',
        dose_product: '',
        group_product: ''
      },
      newImage: null
    };
  },
  async created() {
      try {
          const productId = this.$route.params.id;
          const response = await axios.get(`http://localhost:6009/api/product/product/${productId}`);
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
          this.form.image_product = await this.uploadImage(this.newImage);
        }
        const productId = this.form._id;
        const response = await axios.put(`http://localhost:6009/api/product/product/${productId}`, this.form);
        console.log('Produk berhasil diedit:', response.data);
        this.$router.push('/list-product');
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
      const response = await axios.post('http://localhost:6009/api/uploadNewImageProduct', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      return response.data.imageUrl;
    },
    async deleteImage() {
      const imageUrl = this.form.image_product;
      try {
        await axios.delete(`http://localhost:6009/api/deleteImage?url=${imageUrl}`);
        console.log('Gambar lama berhasil dihapus');
        this.form.image_product = '';
      } catch (error) {
        console.error('Gagal menghapus gambar lama:', error.response.data);
      }
    }
  }
};
</script>
