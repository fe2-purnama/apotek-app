<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';


const username = ref('');
const password = ref('');
const router = useRouter();

const login = async () => {
    try {
        const response = await axios.post('http://localhost:3000/api/auth/login', {
            username: username.value,
            password: password.value
        });

        console.log('Response:', response); // Periksa seluruh respons dari server

        if (response.data.success) {
            const token = response.data.token;
            console.log('JWT token:', token); // Periksa token JWT sebelum disimpan
            
            localStorage.setItem('jwt', token);
            localStorage.setItem('username', response.data.data.username);
            
            // Redirect ke halaman home atau lakukan operasi lainnya setelah login berhasil
            router.push({ name: 'home' });
        } else {
            alert('Login failed');
        }
    } catch (error) {
        console.error('Login error:', error);
    }
};

</script>

<template>
  <section class="container mt-5 vh-100" id="container">
    <form id="registration-form" @submit.prevent="login"
      class="justify-content-center align-item-center  border-black shadow">

      <div class="d-flex justify-content-center align-items-center ">
        <div class="circle-container">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-person-fill"
            viewBox="0 0 16 16">
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
          </svg>
        </div>

      </div>
      <h3 class="text-center mt-3">Login To Your Account</h3>

      <label class="text-dark " or="username">Username:</label>
      <input class="border border-black" type="text" id="username" v-model="username" placeholder="eg. Jogn_Doe123">
      <br>
      <label for="password">Password:</label>
      <input class="border border-black" type="password" id="password" v-model="password">
      <a class="RESET" href="#">
        <p>Reset Password</p>
      </a>
      <div class="text-center mt-1" id="Daftar-di-sini">
        Baru Pertama Mendaftar? <router-link to="/Hero">Daftar Disini</router-link>
      </div>
      <div class="d-flex align-items-center justify-content-center ">
        <button id="btnLogin" class="btn btn-dark m-auto text-center w-50 mt-1 justify-content-center" type="submit">
          Log in
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
  input[type="password"] {
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
