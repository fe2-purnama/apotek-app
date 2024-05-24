<template>
  <div class="container" id="Container">
    <div class="row justify-content-center ">
      <div class="col-lg-5 col-md-8">
        <div class="card shadow-lg">
          <div class="card-body p-5">
            <h2 class="card-title text-center mb-4">Login</h2>
            <form @submit.prevent="handleLogin">
              <div class="mb-3">
                <label for="username" class="form-label">Nama Pengguna</label>
                <input type="text" v-model="username" required class="form-control" id="username" placeholder="Masukkan Nama Pengguna">
              </div>
              <br>
              <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" v-model="password" required class="form-control" id="password" placeholder="Masukkan Password">
              </div>
              <br>
              <div class="d-grid">
                <button type="submit" class="btn btn-login btn-block">Login</button>
              </div>
            </form>
            <div class="text-center mt-3">
              Baru Pertama Mendaftar? <router-link to="/registration">Daftar Disini</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  data() {
    return {
      username: '', 
      password: ''
    };
  },
  methods: {
    handleLogin() {
      // Logic for login
      console.log('Logging in with', this.username, this.password); 
    }
  }
};
</script>

<style scoped>

#Container{
  width: 2000px;
}

.card {
  border: none;
  border-radius: 15px;
}

.card-title {
  color: #333;
  font-size: 24px;
}

.form-label {
  font-weight: bold;
  color: #555;
}

.btn-login {
  background-color: #000000;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.btn-login:hover {
  background-color: #000000;
  transform: scale(1.05);
}

.btn-login:focus {
  box-shadow: 0 0 0 0.2rem rgba(72, 180, 97, 0.5);
}
</style>