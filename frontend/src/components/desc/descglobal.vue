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
                  <!-- Use dynamic image if available, otherwise fallback to static image -->
                  <img :src="`http://localhost:6009${product.image_product}`" :alt="product.name_product">
              </div>
              <div class="col2">
                  <!-- Use dynamic product name if available -->
                  <h2>{{ product.name_product || 'Product Name' }}</h2>
                  <!-- Use dynamic description if available -->
                  <p>{{ product.description_product || 'Product Description' }}</p>
                  <!-- Use dynamic dosage if available -->
                  <h2>Anjuran Pakai</h2>
                  <ul>
                      <li>{{ product.dose_product || 'Dosage Instructions' }}</li>
                  </ul>
                  <!-- Use dynamic side effects if available -->
                  <h2>efek samping</h2>
                  <p>{{ product.sideeffects_product || 'Side Effects Information' }}</p>
                  <!-- Display the calculated total price -->
                  <h2>Harga</h2>
                  <p>Rp {{ totalPrice }}</p>
                  <!-- quantity -->
                  <div class="calculator">
                      <div class="button" @click="changeValue(-1)">-</div>
                      <div id="number">{{ quantity }}</div>
                      <div class="button" @click="changeValue(1)">+</div>
                  </div>
                  <!-- quantity end-->
                  <!-- checkout -->
                  <a href="/Hero">
                      <button class="checkout">tambah ke keranjang</button>
                  </a>
              </div>
          </div>
      </div>
  </div>

  <footer>
      <Footer />
  </footer>
</template>

<script>
import { ref, computed } from 'vue'
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

        function changeValue(change) {
            quantity.value += change;
            if (quantity.value < 1) quantity.value = 1; // Prevents quantity from going below 1
        }

        // Computed property to calculate total price
        const totalPrice = computed(() => {
            return product.value.price_product ? product.value.price_product * quantity.value : 'Price Information';
        });

        return {
            quantity,
            changeValue,
            product,
            totalPrice // Make sure to return this
        }
    },
    mounted() {
        const productId = this.$route.params.id;
        axios.get(`http://localhost:6009/api/product/product/${productId}`)
          .then(response => {
            this.product = response.data.data;
          })
          .catch(error => console.error('Error:', error));
    }
};
</script>