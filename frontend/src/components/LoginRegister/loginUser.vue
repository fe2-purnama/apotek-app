<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

// State variables for username and password
const username_user = ref('');
const password_user = ref('');
const passwordVisible = ref(false); // State to toggle password visibility

const router = useRouter();

const login = async () => {
  try {
    const response = await axios.post('http://localhost:6009/api/auth/login', {
      username_user: username_user.value,
      password_user: password_user.value,
    });

    console.log('Response:', response); // Check the entire response from the server

    if (response.data.success) {
      const authToken = response.data.authToken;
      localStorage.setItem('authToken', authToken);
      localStorage.setItem('userData', JSON.stringify(response.data.data));
      // Redirect to the home page or perform other operations after successful login
      router.push({ name: 'HomeLogin' });
    } else {
      alert('Login failed');
    }
  } catch (error) {
    console.error('Login error:', error);
  }
};

// Method to toggle password visibility
const togglePasswordVisibility = () => {
  passwordVisible.value = !passwordVisible.value;
};
</script>

<template>
  <section class="container mt-5 vh-100" id="container">
    <form id="registration-form" @submit.prevent="login" class="justify-content-center align-item-center border-black shadow">

      <div class="d-flex justify-content-center align-items-center">
        <div class="circle-container">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
          </svg>
        </div>
      </div>
      <h3 class="text-center mt-3">Login To Your Account</h3>

      <label class="text-dark" for="username">Username:</label>
      <input class="border border-black" type="text" id="username_user" v-model="username_user" placeholder="Cth: Charlize_Scavendish">
      <br>
      <label for="password">Password:</label>
      <div class="password-container">
        <input :type="passwordVisible ? 'text' : 'password'" id="password_user" v-model="password_user" class="border border-black" placeholder="Masukkan Password">
        <button type="button" @click="togglePasswordVisibility" class="password-toggle">
          <i :class="passwordVisible ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
        </button>
      </div>
      <a class="RESET" href="login">
        <p>Reset Password</p>
      </a>
      <div class="text-center mt-1" id="Daftar-di-sini">
        Baru Pertama Mendaftar? <router-link to="/registUser">Daftar Disini</router-link>
      </div>
      <div class="d-flex align-items-center justify-content-center">
        <button id="btnLogin" class="btn btn-dark m-auto text-center w-50 mt-1 justify-content-center" type="submit">
          Sign in
        </button>
      </div>
    </form>
  </section>
</template>

<style scoped>
@import './style.css';

form {
  max-width: 400px;
  margin: 0 auto;
  padding: 30px;
  background-color: #f8f8f8;
  border-radius: 8px;
}

label {
  display: block;
  margin-bottom: 8px;
}

input[type="text"],
input[type="password"],
input[type="submit"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

input[type="submit"] {
  background-color: #292929;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #5a5a5a;
}

.password-container {
  display: flex;
  align-items: center;
}

.password-toggle {
  background: none;
  border: none;
  margin-left: -40px;
  cursor: pointer;
}

.RESET {
  text-align: right;
  margin-right: 10px;
  color: #3b3bff;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
}

.Link-Register {
  font-size: 18px;
  font-weight: 400;
}

.Link-Register a {
  color: #3b3bff;
  text-decoration: none;
  font-weight: 500;
}
</style>