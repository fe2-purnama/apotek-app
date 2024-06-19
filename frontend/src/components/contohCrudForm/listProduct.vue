<template>
  <div>
    <h1>Daftar Produk</h1>
    <table>
      <thead>
        <tr>
          <th>Nama Produk</th>
          <th>Harga Produk</th>
          <th>Kategori Produk</th>
          <th>Deskripsi Produk</th>
          <th>Stok Produk</th>
          <th>Tanggal Kadaluarsa Produk</th>
          <th>Gambar Produk</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in productList" :key="product._id">
          <td>{{ product.name_product }}</td>
          <td>{{ product.price_product }}</td>
          <td>{{ product.category_product }}</td>
          <td>{{ product.description_product }}</td>
          <td>{{ product.stock_product }}</td>
          <td>{{ product.expiry_date_product }}</td>
          <td>
            <img :src="'http://localhost:6009/public/img/product/' + product.image_product" alt="Gambar Produk" width="150">
          </td>
          <td>
            <button @click="editProduct(product._id)">Edit</button>
            <button @click="deleteProduct(product._id)">Hapus</button>
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
      productList: []
    };
  },
  async created() {
    try {
      const response = await axios.get('http://localhost:6009/api/product/product');
      this.productList = response.data.data;
    } catch (error) {
      console.error('Terjadi kesalahan:', error.response.data);
    }
  },
  methods: {
    async deleteProduct(productId) {
      try {
        await axios.delete(`http://localhost:6009/api/product/product${productId}`);
        console.log('Produk berhasil dihapus');
        this.productList = this.productList.filter(product => product._id !== productId);
      } catch (error) {
        console.error('Gagal menghapus obat:', error.response.data);
      }
    },
    editProduct(productId) {
      this.$router.push(`/editProduct/${productId}`);
    }
  }
};
</script>
