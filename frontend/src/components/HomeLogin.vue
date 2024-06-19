<template>
  <section class="container">
    <nav>
      <NavMenu />
    </nav>

    <main class="mt-3">
      <div class="text-center">
        <img src="../assets/BannerDiskon.png" alt="banner Diskone" width="700px" height="300"
             class="justify-content-center text-center" />
        <h2 class="mt-4">Rekomendasi Obat</h2>
      </div>

      <div id="carousel">
        <CardCarosel />
      </div>

      <div class="row mb-4">
        <div class="col-md-3 ml-4 mt-4">
          <h3 class="text-center">Produk Lainya</h3>
          <a href="#">
            <img src="../assets/promo1.png" alt="" width="250" />
            <img src="../assets/promo2.png" alt="" width="250" class="mt-3" />
          </a>
        </div>

        <div class="col-md-9">
          <div class="container1">
            <div v-for="product in products" :key="product._id" class="card">
              <a :href="'/descglobal/' + product._id">
                <img :src="'http://localhost:6009/public/img/product/' + product.image_product" alt="Gambar Produk" width="150">
                <h2>{{ product.name_product }}</h2>
                <p>Rp {{ product.price_product }}</p>
              </a>
            </div>
          </div>

          <div class="pagination">
            <a href="#">&laquo;</a>
            <a href="#" class="active">1</a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">...</a>
            <a href="#">10</a>
            <a href="#">11</a>
            <a href="#">12</a>
            <a href="#">&raquo;</a>
          </div>
        </div>
      </div>
    </main>

    <footer>
      <Footer />
    </footer>
  </section>
</template>

<script>
import axios from 'axios';
import NavMenu from "../components/NavMenu/NavMenu.vue";
import Footer from "../components/Footer/Footer.vue";
import CardCarosel from "../components/Carosel/CardCarosel.vue";

export default {
  components: {
    NavMenu,
    Footer,
    CardCarosel,
  },
  data() {
    return {
      products: []
    }
  },
  mounted() {
    axios.get('http://localhost:6009/api/product/product')
     .then(response => {
        this.products = response.data.data;
      })
     .catch(error => {
        console.error(error);
      });
  }
}
</script>

<style scoped>
@import "style.css";

h2 {
  font-family: "Baloo 2";
  font-weight: 700;
}

nav {
  position: sticky;
  top: 0;
  z-index: 1000;
}

#carousel {
  margin-top: -120px;
}

.container1, .row {
  padding-top: 45px;
}
</style>