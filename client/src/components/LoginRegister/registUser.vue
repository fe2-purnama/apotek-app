<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const name = ref('');
const username_user = ref('');
const email = ref('');
const phone = ref('');
const dob = ref('');
const password = ref('');
const confirmPassword = ref('');
const errorMessage = ref('');
const successMessage = ref('');
const showPassword = ref(false);
const showConfirmPassword = ref(false);
const router = useRouter();

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

const toggleConfirmPasswordVisibility = () => {
  showConfirmPassword.value = !showConfirmPassword.value;
};

const register = async () => {
  // Clear previous messages
  errorMessage.value = '';
  successMessage.value = '';

  // Basic validation checks
  if (!name.value) {
    errorMessage.value = 'Nama wajib diisi';
    return;
  }
  if (!username_user.value) {
    errorMessage.value = 'Username wajib diisi';
    return;
  }
  if (!email.value) {
    errorMessage.value = 'Email wajib diisi';
    return;
  }
  if (!phone.value) {
    errorMessage.value = 'No Handphone wajib diisi';
    return;
  }
  if (!dob.value) {
    errorMessage.value = 'Tanggal Lahir wajib diisi';
    return;
  }
  if (!password.value) {
    errorMessage.value = 'Password wajib diisi';
    return;
  }
  if (!confirmPassword.value) {
    errorMessage.value = 'Konfirmasi Password wajib diisi';
    return;
  }
  if (password.value.length < 6 || !/[A-Z]/.test(password.value) || !/[0-9]/.test(password.value) || !/[!@#$%^&*]/.test(password.value)) {
    errorMessage.value = 'Password harus minimal 6 karakter, meliputi Huruf Kapital, Tanda Baca, dan Angka.';
    return;
  }
  if (password.value !== confirmPassword.value) {
    errorMessage.value = 'Konfirmasi password tidak sama';
    return;
  }

  try {
    const response = await axios.post('http://localhost:3000/api/auth/register', {
      name: name.value,
      username: username_user.value,
      email: email.value,
      phone: phone.value,
      dob: dob.value,
      password: password.value
    });
    if (response.data.success) {
      successMessage.value = 'Registrasi berhasil! Mengarahkan ke halaman login...';
      setTimeout(() => {
        router.push({ name: 'login' });
      }, 2000);
    } else {
      errorMessage.value = 'Registrasi gagal';
    }
  } catch (error) {
    console.error('Registration error:', error);
    errorMessage.value = 'Terjadi kesalahan saat mendaftar. Silakan coba lagi.';
  }
};
</script>

<template>
  <section class="container shadow justify-content-center" id="container2">
    <div class="d-flex justify-content-center align-items-center">
      <div class="circle-container">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-person-add"
          viewBox="0 0 16 16">
          <path
            d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
          <path
            d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z" />
        </svg>
      </div>
    </div>
    <h2 id="create">Membuat Akun Baru</h2>
    <p id="createP" class="text-center">isi form di bawah untuk membuat account baru</p>
    <div v-if="errorMessage" class="alert alert-danger" role="alert">
      {{ errorMessage }}
    </div>
    <div v-if="successMessage" class="alert alert-success" role="alert">
      {{ successMessage }}
    </div>
    <div class="row justify-content-center" id="rowRegister">
      <form id="registration-form" @submit.prevent="register" class="col-10">
        <div class="row">
          <div class="col-6">
            <label for="name">Nama Lengkap:</label>
            <input class="border border-black form-control" type="text" id="name" v-model="name"
              placeholder="Cth: Charlize Scavendish">
            <br>
            <label for="username">Username:</label>
            <input class="border border-black form-control" type="text" id="username_user" v-model="username"
              placeholder="Cth: Charlize_Scavendish">
            <br>
            <label for="phone">No Handphone:</label>
            <input class="border border-black form-control" type="tel" id="phone" v-model="phone"
              placeholder="Cth: 081228567215">
            <br>
            <label for="dob">Tanggal Lahir:</label>
            <input class="border border-black form-control" type="date" id="dob" v-model="dob">
          </div>
          <div class="col-6">
            <label for="email">Email:</label>
            <input class="border border-black form-control" type="text" id="email" v-model="email"
              placeholder="Cth: nama@email.com">
            <br>
            <label for="password">Password:</label>
            <div class="input-group">
              <input :type="showPassword ? 'text' : 'password'" class="border border-black form-control" id="password"
                v-model="password">
              <span class="input-group-text" @click="togglePasswordVisibility">
                <i :class="showPassword ? 'bi bi-eye-slash' : 'bi bi-eye'"></i>
              </span>
            </div>
            <p>Password harus minimal 6 karakter, meliputi Huruf Kapital, Tanda Baca, dan Angka.</p>
            <label for="confirm-password">Konfirmasi Password:</label>
            <div class="input-group">
              <input :type="showConfirmPassword ? 'text' : 'password'" class="border border-black form-control"
                id="confirm-password" v-model="confirmPassword">
              <span class="input-group-text" @click="toggleConfirmPasswordVisibility">
                <i :class="showConfirmPassword ? 'bi bi-eye-slash' : 'bi bi-eye'"></i>
              </span>
            </div>
          </div>
        </div>
        <div class="justify-content-center d-flex align-items-center mt-3">
          <button class="btn btn-black bg-black" type="submit" id="btnRegister">Daftar</button>
        </div>
        <div class="text-center mt-1" id="Daftar-di-sini">
          Sudah mempunyai akun? <router-link to="/Login">Login</router-link>
        </div>
      </form>
    </div>
  </section>
</template>

<style scoped>
@import './style.css';

#registration-form {
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
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

#registration-form .input-group-text {
  cursor: pointer;
}

#btnRegister {
  padding: 10px;
  background-color: #1a1a1a;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

#btnRegister:hover {
  background-color: #464646;
}

.alert {
  margin-top: 20px;
  padding: 15px;
  border: 1px solid transparent;
  border-radius: 4px;
}

.alert-danger {
  color: #a94442;
  background-color: #f2dede;
  border-color: #ebccd1;
}

.alert-success {
  color: #3c763d;
  background-color: #dff0d8;
  border-color: #d6e9c6;
}
</style>