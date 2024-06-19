<style>
@import "style.css";
</style>
 
<template>
  <nav>
    <NavMenu />
  </nav>
 
  <div id="productdetails">
    <h1>PRODUCT DETAILS</h1>
    <div id="container">
      <div class="row">
        <div class="col1">
          <img :src="`http://localhost:6009/public/img/product/${product.image_product}`" :alt="product.name_product">
        </div>
        <div class="col2">
          <h2>{{ product.name_product || 'Product Name' }}</h2>
          <p>{{ product.description_product || 'Product Description' }}</p>
          <h2>Anjuran Pakai</h2>
          <ul>
            <li>{{ product.dose_product || 'Dosage Instructions' }}</li>
          </ul>
          <h2>Efek Samping</h2>
          <p>{{ product.sideeffects_product || 'Side Effects Information' }}</p>
          <h2>Harga</h2>
          <p>Rp {{ totalPrice }}</p>
          <div class="calculator">
            <div class="button" @click="changeValue(-1)">-</div>
            <div id="number">{{ quantity }}</div>
            <div class="button" @click="changeValue(1)">+</div>
          </div>
          <button class="checkout" @click="addToCart">Tambah ke Keranjang</button>
        </div>
      </div>
    </div>
  </div>
 
  <footer>
    <Footer />
  </footer>
</template>
 
<script>
import Swal from 'sweetalert2';
import { ref, computed } from 'vue';
import axios from 'axios';
import NavMenu from "@/components/NavMenu/NavMenu.vue";
import Footer from '../Footer/Footer.vue';
 
export default {
  components: {
    NavMenu,
    Footer
  },
  setup() {
    const quantity = ref(1);
    const product = ref({});
    const searchQuery = ref('');
    const searchResults = ref([]);
    const userName = ref('');
 
    function changeValue(change) {
      quantity.value += change;
      if (quantity.value < 1) quantity.value = 1;
    }
 
    const totalPrice = computed(() => {
      return product.value.price_product ? product.value.price_product * quantity.value : 'Price Information';
    });
 
    const addToCart = async () => {
      const authToken = localStorage.getItem('authToken');
      const userData = JSON.parse(localStorage.getItem('userData'));
      if (!authToken || !userData) {
        alert('You need to login first');
        return;
      }
 
      try {
        await axios.post('http://localhost:6009/api/cart/add-cart-item', {
          id_product: product.value._id,
          id_user: userData._id,
          quantity: quantity.value,
          status: false
        }, {
          headers: {
            Authorization: `Bearer ${authToken}`
          }
        });
 
        // Tampilkan SweetAlert setelah berhasil menambahkan ke keranjang
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Product added to cart',
          showConfirmButton: false,
          timer: 1500
        });
 
      } catch (error) {
        console.error('Error adding to cart:', error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Failed to add product to cart',
        });
      }
    };
 
    const searchProducts = async () => {
      if (searchQuery.value.trim() === '') {
        // Jika query pencarian kosong, tetap di halaman HomeLogin
        this.$router.push('/HomeLogin');
        return;
      }
 
      try {
        const response = await axios.get(`http://localhost:6009/api/product/product/?search=${searchQuery.value}`);
        const products = response.data.data;
        if (products.length > 0) {
          const productId = products[0]._id; // Mengambil ID produk pertama yang ditemukan
          this.$router.push(`/descglobal/${productId}`); // Navigasi ke halaman descglobal dengan ID produk
        } else {
          console.log('Tidak ada produk yang ditemukan');
        }
      } catch (error) {
        console.error(error);
      }
    };
 
    const getUserData = () => {
      const userData = localStorage.getItem('userData');
      if (userData) {
        const parsedData = JSON.parse(userData);
        userName.value = parsedData.name_user || 'User';
      }
    };
 
    const fetchProduct = async (productId) => {
      try {
        const response = await axios.get(`http://localhost:6009/api/product/product/${productId}`);
        product.value = response.data.data;
      } catch (error) {
        console.error('Error:', error);
      }
    };
 
    return {
      quantity,
      changeValue,
      product,
      totalPrice,
      addToCart,
      searchQuery,
      searchResults,
      searchProducts,
      userName,
      getUserData,
      fetchProduct
    };
  },
  mounted() {
    this.getUserData();
    this.fetchProduct(this.$route.params.id);
  },
  watch: {
    '$route.params.id': {
      immediate: true,
      handler(newId) {
        this.fetchProduct(newId); // Call fetchProduct function when route param 'id' changes
      }
    }
  }
};
</script>