<template>
  <div class="dashboard">
    <nav>
      <NavMenu />
    </nav>
    <br>
    <br>
    <br>
    <div class="content">
      <h1>Dashboard</h1>
      <div class="spacer"></div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Informasi Pengguna:</h5>
          <div class="user-info">
            <div class="row mb-2">
              <div class="col-sm-4"><strong>Nama Lengkap</strong></div>
              <div class="col-sm-8">: {{ userData.name_user }}</div>
            </div>
            <div class="row mb-2">
              <div class="col-sm-4"><strong>Email </strong></div>
              <div class="col-sm-8">: {{ userData.email_user }}</div>
            </div>
            <div class="row mb-2">
              <div class="col-sm-4"><strong>Tanggal Lahir</strong></div>
              <div class="col-sm-8">: {{ userData.dob_user }}</div>
            </div>
            <div class="row mb-2">
              <div class="col-sm-4"><strong>Nomor Handphone</strong></div>
              <div class="col-sm-8">: {{ userData.phone_user }}</div>
            </div>
            <div class="row mb-2">
              <div class="col-sm-4"><strong>Alamat</strong></div>
              <div class="col-sm-8">: {{ userData.address_user }}</div>
            </div>
            <div class="row mb-2">
              <div class="col-sm-4"><strong>Jenis Kelamin</strong></div>
              <div class="col-sm-8">: {{ userData.gender_user }}</div>
            </div>
          </div>
        </div>
      </div>
      <br><br><br>
      <div class="card mt-3">
        <div class="card-body">
          <h5 class="card-title">Update Biodata :</h5>
          <form @submit.prevent="updateProfile">
            <div class="mb-3">
              <label for="name" class="form-label">Nama Lengkap :</label>
              <input type="text" id="name" v-model="updatedUser.name_user" class="form-control">
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email :</label>
              <input type="email" id="email" v-model="updatedUser.email_user" class="form-control">
            </div>
            <div class="mb-3">
              <label for="dob" class="form-label">Tanggal Lahir :</label>
              <input type="date" id="dob" v-model="updatedUser.dob_user" class="form-control">
            </div>
            <div class="mb-3">
              <label for="phone" class="form-label">No Handphone :</label>
              <input type="text" id="phone" v-model="updatedUser.phone_user" class="form-control">
            </div>
            <div class="mb-3">
              <label for="address" class="form-label">Alamat :</label>
              <textarea id="address" v-model="updatedUser.address_user" class="form-control"></textarea>
            </div>
            <div class="mb-3">
              <label for="gender" class="form-label">Gender :</label>
              <select id="gender" v-model="updatedUser.gender_user" class="form-select">
                <option value="">Pilih Gender :</option>
                <option value="Pria">Pria</option>
                <option value="Wanita">Wanita</option>
              </select>
            </div>
            <button type="submit" class="btn btn-primary">Update</button>
          </form>
        </div>
      </div>
      <div v-if="alertVisible" class="alert alert-success mt-3" role="alert">
        Biodata telah berhasil diubah!
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import NavMenu from '../NavMenu/NavMenu.vue';
import Footer from '../Footer/Footer.vue'; 
import { useRouter } from 'vue-router';
import Swal from 'sweetalert2';

const userData = ref({});
const updatedUser = ref({
  name_user: '',
  email_user: '',
  dob_user: '',
  phone_user: '',
  address_user: '',
  gender_user: ''
});
const router = useRouter();

// Ambil data pengguna dari local storage saat komponen di-mount
onMounted(() => {
  const storedUserData = localStorage.getItem('userData');
  if (storedUserData) {
    userData.value = JSON.parse(storedUserData);
  }
});

// Fungsi untuk logout
const logout = async () => {
  try {
    const response = await axios.get('http://localhost:6009/api/auth/logout');

    if (response.data.success) {
      localStorage.removeItem('authToken');
      localStorage.removeItem('userData');
      router.push({ name: 'login' });
    } else {
      console.error('Logout error:', response.data.message);
    }
  } catch (error) {
    console.error('Logout error:', error);
  }
};

const updateProfile = async () => {
  if (!updatedUser.value.name_user || !updatedUser.value.email_user || !updatedUser.value.dob_user || !updatedUser.value.phone_user || !updatedUser.value.address_user || !updatedUser.value.gender_user) {
    Swal.fire({
      icon: 'error',
      title: 'Maaf...',
      text: 'Semua Kolom Wajib Diisi!',
    });
    return;
  }

  try {
    const authToken = localStorage.getItem('authToken');
    if (!authToken) {
      console.error('Auth token not found.');
      return;
    }

    const response = await axios.put('http://localhost:6009/api/auth/update-profile', updatedUser.value, {
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    });

    if (response.data.success) {
      // Update data pengguna yang disimpan di local storage
      localStorage.setItem('userData', JSON.stringify(updatedUser.value));
      // Tampilkan pesan sukses
      userData.value = { ...updatedUser.value };
      Swal.fire({
        icon: 'success',
        title: 'Berhasil',
        text: 'Biodata Telah Berhasil Diubah!',
      });
      // Reset updatedUser fields
      updatedUser.value = {
        name_user: '',
        email_user: '',
        dob_user: '',
        phone_user: '',
        address_user: '',
        gender_user: ''
      };
    } else {
      console.error('Profile update failed');
    }
  } catch (error) {
    console.error('Profile update error:', error);
  }
};
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');

.dashboard {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.content {
  width: 100%;
  max-width: 600px;
}

.spacer {
  height: 20px;
}

.card {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-top: 20px;
}

.card-body {
  display: flex;
  flex-direction: column;
}

.card-title {
  margin-bottom: 15px;
  font-size: 1.25rem;
  font-weight: bold;
}

.user-info .row {
  margin-bottom: 10px;
}

.user-info .row .col-sm-4 {
  font-weight: bold;
}

.btn-primary {
  background-color: #96db5b;
  border-color: #96db5b;
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #008036;
  border-color: #008036;
}
</style>