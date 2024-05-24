<script setup>
import { ref, computed } from 'vue';

const name = ref('');
const username = ref('');
const phone = ref('');
const dob = ref('');
const password = ref('');
const confirmPassword = ref('');
const showPassword = ref(false);
const showConfirmPassword = ref(false);
const errorMessage = ref('');
const successMessage = ref('');

const validateForm = () => {
  const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9]).{6,}$/;

  if (!name.value) {
    errorMessage.value = 'Nama diperlukan.';
    return false;
  }
  if (!username.value) {
    errorMessage.value = 'Nama Pengguna diperlukan.';
    return false;
  }
  if (!phone.value) {
    errorMessage.value = 'Nomor Telefon diperlukan.';
    return false;
  }
  if (!dob.value) {
    errorMessage.value = 'Tanggal Lahir diperlukan.';
    return false;
  }
  if (!password.value) {
    errorMessage.value = 'Kata Sandi diperlukan.';
    return false;
  }
  if (!passwordRegex.test(password.value)) {
    errorMessage.value = 'Password harus minimal 6 karakter, meliputi Huruf Kapital, Tanda Baca, dan Angka.';
    return false;
  }
  if (password.value !== confirmPassword.value) {
    errorMessage.value = 'Kata Sandi tidak sesuai, Coba lagi.';
    return false;
  }
  return true;
};

const handleSubmit = (e) => {
  e.preventDefault();
  if (validateForm()) {
    errorMessage.value = '';
    successMessage.value = 'Akun Berhasil Didaftarkan';
    
    name.value = '';
    username.value = '';
    phone.value = '';
    dob.value = '';
    password.value = '';
    confirmPassword.value = '';
  } else {
    successMessage.value = '';
  }
};

const togglePasswordVisibility = (field) => {
  if (field === 'password') {
    showPassword.value = !showPassword.value;
  } else if (field === 'confirmPassword') {
    showConfirmPassword.value = !showConfirmPassword.value;
  }
};
</script>

<template>
  <div class="Container w-4000 shadow-lg " id="Container">
    <form id="registration-form" @submit="handleSubmit">
      <label for="name" class="form-label fw-bold">Nama:</label>
      <input class="form-control" type="text" id="name" name="name" v-model="name" placeholder="Masukkan Nama Lengkap">
      <br>
      <label class="form-label fw-bold" for="username">Nama Pengguna:</label>
      <input class="form-control" type="text" id="username" name="username" v-model="username"
        placeholder="Masukkan Nama Pengguna">
      <br>
      <label class="form-label fw-bold" for="phone">Nomor Telefon:</label>
      <input class="form-control" type="tel" id="phone" name="phone" v-model="phone" placeholder="Masukkan Telefon">
      <br>
      <label class="form-label fw-bold" for="dob">Tanggal Lahir:</label>
      <input class="form-control" type="date" id="dob" name="dob" v-model="dob">
      <br>
      <label class="form-label fw-bold" for="password">Password:</label>
      <div class="password-wrapper">
        <input :type="showPassword ? 'text' : 'password'" id="password" name="password" v-model="password"
          class="form-control">
        <button type="button" @click="togglePasswordVisibility('password')">
          <i :class="showPassword ? 'fas fa-eye' : 'fas fa-eye-slash'"></i>
        </button>
      </div>
      <small>Password harus minimal 6 karakter, meliputi Huruf Kapital, Tanda Baca, dan Angka.</small>
      <br>
      <label for="confirm-password">Konfirmasi Password:</label>
      <div class="password-wrapper">
        <input :type="showConfirmPassword ? 'text' : 'password'" id="confirm-password" name="confirm-password"
          v-model="confirmPassword">
        <button type="button" @click="togglePasswordVisibility('confirmPassword')">
          <i :class="showConfirmPassword ? 'fas fa-eye' : 'fas fa-eye-slash'"></i>
        </button>
      </div>
      <br>
      <input type="submit" value="Daftar">
      <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
      <div v-if="successMessage" class="success-message">{{ successMessage }}</div>
      <p>
        <router-link to="/Login">Login</router-link>
      </p>
    </form>


  </div>


</template>

<style scoped>

  #Container{
    width: 500px;
    border-radius: 10px;
  }

  #registration-form {
    width: 300px;
    margin: 0 auto;
    padding: 15px;
    font-family: Arial, sans-serif;
  }

  #registration-form label {
    display: block;
    margin-top: 10px;
  }

  #registration-form input[type="text"],
  #registration-form input[type="tel"],
  #registration-form input[type="date"],
  #registration-form input[type="password"] {
    width: 100%;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
  }

  .password-wrapper {
    position: relative;
  }

  .password-wrapper input {
    padding-right: 30px;
  }

  .password-wrapper button {
    position: absolute;
    right: 5px;
    top: 50%;
    transform: translateY(-50%);
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  .password-wrapper i {
    font-size: 16px;
    color: #555;
  }

  #registration-form input[type="submit"] {
    width: 100%;
    padding: 10px;
  
    background-color: #1a1a1a;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  #registration-form input[type="submit"]:hover {
    background-color: #464646;
  }

  .error-message {
    color: red;
    margin-top: 10px;
  }

  .success-message {
    color: green;
    margin-top: 10px;
  }

  small {
    color: #555;
  }
</style>