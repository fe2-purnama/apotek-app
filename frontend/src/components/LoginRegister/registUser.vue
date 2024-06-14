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
    <div class="row justify-content-center" id="rowRegister">
      <form id="registration-form" @submit.prevent="register" class="col-10">
        <div class="row">
          <div class="col-6">
            <div class="form-group" :class="{ 'has-error': !name_user }">
              <label for="name_user">Nama Lengkap:</label>
              <input class="border border-black form-control" type="text" id="name_user" v-model="name_user"
                placeholder="Cth: Charlize Scavendish">
              <div v-if="!name_user" class="error"><i class="fa fa-exclamation-circle"></i> Nama wajib diisi</div>
            </div>
            <br>
            <div class="form-group" :class="{ 'has-error': !username_user }">
              <label for="username_user">Username:</label>
              <input class="border border-black form-control" type="text" id="username_user" v-model="username_user"
                placeholder="Cth: Charlize_Scavendish">
              <div v-if="!username_user" class="error"><i class="fa fa-exclamation-circle"></i> Username wajib diisi
              </div>
            </div>
            <br>
            <div class="form-group" :class="{ 'has-error': !phone_user }">
              <label for="phone_user">No Handphone:</label>
              <input class="border border-black form-control" type="tel" id="phone_user" v-model="phone_user"
                placeholder="Cth: 081228567215">
              <div v-if="!phone_user" class="error"><i class="fa fa-exclamation-circle"></i> No Handphone wajib diisi
              </div>
            </div>
            <br>
            <div class="form-group" :class="{ 'has-error': !dob_user }">
              <label for="dob_user">Tanggal Lahir:</label>
              <input class="border border-black form-control" type="date" id="dob_user" v-model="dob_user">
              <div v-if="!dob_user" class="error"><i class="fa fa-exclamation-circle"></i> Tanggal Lahir wajib diisi
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="form-group" :class="{ 'has-error': !email_user }">
              <label for="email_user">Email:</label>
              <input class="border border-black form-control" type="text" id="email_user" v-model="email_user"
                placeholder="Cth: nama@email.com">
              <div v-if="!email_user" class="error"><i class="fa fa-exclamation-circle"></i> Email wajib diisi</div>
            </div>
            <br>
            <div class="form-group" :class="{ 'has-error': !password_user }">
              <label for="password_user">Password:</label>
              <div class="input-group">
                <input :type="showPassword ? 'text' : 'password'" class="border border-black form-control"
                  id="password_user" v-model="password_user">
                <span class="input-group-text" @click="togglePasswordVisibility">
                  <i :class="showPassword ? 'bi bi-eye-slash' : 'bi bi-eye'"></i>
                </span>
                <div v-if="!password_user" class="error"><i class="fa fa-exclamation-circle"></i> Password wajib diisi
                </div>
              </div>
              <p>Password harus minimal 6 karakter, meliputi Huruf Kapital, Tanda Baca, dan Angka.</p>
            </div>
            <br>
            <div class="form-group" :class="{ 'has-error': !confirmPassword || (confirmPassword !== password_user) }">
              <label for="confirm-password">Konfirmasi Password:</label>
              <div class="input-group">
                <input :type="showConfirmPassword ? 'text' : 'password'" class="border border-black form-control"
                  id="confirm-password" v-model="confirmPassword">
                <span class="input-group-text" @click="toggleConfirmPasswordVisibility">
                  <i :class="showConfirmPassword ? 'bi bi-eye-slash' : 'bi bi-eye'"></i>
                </span>
                <div v-if="!confirmPassword || (confirmPassword !== password_user)" class="error"><i
                    class="fa fa-exclamation-circle"></i> Konfirmasi password tidak sama</div>
              </div>
            </div>
          </div>
        </div>
        <div class="justify-content-center d-flex align-items-center mt-3">
          <button class="btn btn-black bg-black" type="submit" id="btnRegister">Daftar</button>
        </div>
        <div class="text-center mt-1" id="Daftar-di-sini">
          Sudah mempunyai akun? <router-link to="/login">Login</router-link>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const name_user = ref('');
const username_user = ref('');
const email_user = ref('');
const phone_user = ref('');
const dob_user = ref('');
const password_user = ref('');
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
  if (!name_user.value) {
    errorMessage.value = 'Nama wajib diisi';
    return;
  }
  if (!username_user.value) {
    errorMessage.value = 'Username wajib diisi';
    return;
  }
  if (!email_user.value) {
    errorMessage.value = 'Email wajib diisi';
    return;
  }
  if (!phone_user.value) {
    errorMessage.value = 'No Handphone wajib diisi';
    return;
  }
  if (!dob_user.value) {
    errorMessage.value = 'Tanggal Lahir wajib diisi';
    return;
  }
  if (!password_user.value) {
    errorMessage.value = 'Password wajib diisi';
    return;
  }
  if (!confirmPassword.value) {
    errorMessage.value = 'Konfirmasi Password wajib diisi';
    return;
  }
  if (password_user.value.length < 6 || !/[A-Z]/.test(password_user.value) || !/[0-9]/.test(password_user.value) || !/[!@#$%^&*]/.test(password_user.value)) {
    errorMessage.value = 'Password harus minimal 6 karakter, meliputi Huruf Kapital, Tanda Baca, dan Angka.';
    return;
  }
  if (password_user.value !== confirmPassword.value) {
    errorMessage.value = 'Konfirmasi password tidak sama';
    return;
  }

  try {
    const response = await axios.post('http://localhost:3000/api/auth/register', {
      name_user: name_user.value,
      username_user: username_user.value,
      email_user: email_user.value,
      phone_user: phone_user.value,
      dob_user: dob_user.value,
      password_user: password_user.value
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

.form-group.has-error input {
  border-color: #e74c3c;
}

.form-group.has-error .error {
  display: block;
  color: #e74c3c;
  font-size: 0.875em;
  margin-top: 5px;
}

.error i {
  margin-right: 5px;
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