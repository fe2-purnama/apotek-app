<template>
    <section id="navmenu">
        <!-- Use Bootstrap classes to ensure proper alignment and spacing -->
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <!-- Navbar brand for logo -->
                <a class="navbar-brand" href="/HomeLogin">
                    <img src="@/assets/logo.png" alt="Logo" width="55" height="auto" class="logo-apotek">
                </a>

                <!-- Toggler/collapsible Button -->
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <!-- Navbar links -->
                <div class="collapse navbar-collapse" id="navbarNav">
                    <!-- Search form -->
                    <form class="d-flex ms-auto" role="search">
                        <input class="form-control me-2" type="search" v-model="searchQuery"
                            placeholder="Cari Obat-obatan" aria-label="Search">
                        <button class="btn btn-outline-success" type="submit"
                            @click.prevent="searchProducts">Search</button>
                    </form>


                    <!-- Cart and user icons -->
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="/Hero">
                                <i class="bi bi-cart4"></i>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <i class="bi bi-file-earmark-diff"></i>
                            </a>
                        </li>
                        <!-- User dropdown -->
                        <li class="nav-item dropdown">
                            <button class="btn btn-outline-dark btn-sm dropdown-toggle" type="button" id="userDropdown"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Halo, {{ userName }}
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="userDropdown">
                                <li><a class="dropdown-item" href="/HomeLogin">Cari Obat</a></li>
                                <li><a class="dropdown-item" href="/Dashboard">Dashboard</a></li>
                                <li><a class="dropdown-item" href="/home2">Log Out</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </section>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      searchQuery: '',
      searchResults: [],
      userName: ''
    };
  },
  methods: {
    async searchProducts() {
      try {
        const response = await axios.get(`http://localhost:6009/api/product/product/?search=${this.searchQuery}`);
        const products = response.data.data;
        if (products.length > 0) {
          const productId = products[0]._id; // Assuming you want to redirect to the first matching product
          this.$router.push({ name: 'Global', params: { id: productId } });
        } else {
          console.log('No products found');
        }
      } catch (error) {
        console.error(error);
      }
    },
    getUserData() {
      const userData = localStorage.getItem('userData');
      if (userData) {
        const parsedData = JSON.parse(userData);
        this.userName = parsedData.name_user || 'User';
      }
    }
  },
  mounted() {
    this.getUserData();
  }
};
</script>

<style scoped>
/* Import your CSS styles as before */
@import './style.css';
</style>