<template>
  <div>
    <h1>Tambah produk</h1>
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
        <label for="image_product">Gambar produk:</label>
        <input type="file" id="image_product" @change="handleFileUpload" required>
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
        name_product: '',
        price_product: '',
        category_product: '',
        description_product: '',
        stock_product: '',
        expiry_date_product: '',
        image_product: null,
        composition_product: '',
        sideeffects_product: '',
        manufacture_product: '',
        group_product: '',
        dose_product: ''
      }
    };
  },
  methods: {
    handleFileUpload(event) {
      this.form.image_product = event.target.files[0];
    },
    async submitForm() {
      const formData = new FormData();
    formData.append('name_product', this.form.name_product);
    formData.append('price_product', this.form.price_product);
    formData.append('category_product', this.form.category_product);
    formData.append('description_product', this.form.description_product);
    formData.append('stock_product', this.form.stock_product);
    formData.append('expiry_date_product', this.form.expiry_date_product);
    formData.append('image_product', this.form.image_product);
    formData.append('composition_product', this.form.composition_product);
    formData.append('sideeffects_product', this.form.sideeffects_product);
    formData.append('manufacture_product', this.form.manufacture_product);
    formData.append('dose_product', this.form.dose_product);
    formData.append('group_product', this.form.group_product);

      try {
        const response = await axios.post('http://localhost:6009/api/product', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        console.log('Produk berhasil ditambahkan:', response.data);
        this.$router.push('/list-product');
      } catch (error) {
        console.error('Terjadi kesalahan:', error.response.data);
      }
    }
  }
};
</script>  