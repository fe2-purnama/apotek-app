<template>
  <div>
    <h1>Profil Pengguna</h1>
    <form @submit.prevent="updateProfile">
      <div>
        <label for="name">Nama Lengkap:</label>
        <input type="text" id="name" v-model="updatedUser.name_user" required>
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="updatedUser.email_user" required>
      </div>
      <div>
        <label for="dob">Tanggal Lahir:</label>
        <input type="date" id="dob" v-model="updatedUser.dob_user" required>
      </div>
      <div>
        <label for="phone">No Handphone:</label>
        <input type="text" id="phone" v-model="updatedUser.phone_user" required>
      </div>

      <div>
        <label for="gender">Gender:</label>
        <select id="gender" v-model="updatedUser.gender_user" required>
          <option value="">Pilih Gender</option>
          <option value="Pria">Pria</option>
          <option value="Wanita">Wanita</option>
        </select>
      </div>
      
      <button type="submit">Update</button>
    </form>

    <button @click="logout">Logout</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const userData = ref({}); // Inisialisasi userData
const updatedUser = ref({});
const router = useRouter();

// Ambil data pengguna dari local storage saat komponen di-mount
onMounted(() => {
  const storedUserData = localStorage.getItem('userData');
  if (storedUserData) {
    userData.value = JSON.parse(storedUserData);
    updatedUser.value = { ...userData.value }; // Inisialisasi updatedUser dengan data pengguna saat ini
    // Set nilai default untuk input tanggal lahir jika data pengguna memiliki nilai null atau undefined
    if (!updatedUser.value.dob_user) {
      updatedUser.value.dob_user = new Date().toISOString().split('T')[0];
    }
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
  try {
    const authToken = localStorage.getItem('authToken');;
    if (!authToken) {
    console.error('Auth token not found.');
    return;
    } // Ambil token otentikasi dari local storage
    const response = await axios.put('http://localhost:6009/api/auth/update-profile', updatedUser.value, {
      headers: {
        Authorization: `Bearer ${authToken}` // Sertakan token otentikasi dalam header Authorization
      }
    });

    if (response.data.success) {
      // Update data pengguna yang disimpan di local storage
      localStorage.setItem('userData', JSON.stringify(updatedUser.value));
      // Tampilkan pesan sukses
      console.log('Profile updated successfully');
    } else {
      console.error('Profile update failed');
    }
  } catch (error) {
    console.error('Profile update error:', error);
  }
};
</script>

<style scoped>
  div {
    text-align: center;
    margin-top: 50px;
  }
  h1 {
    font-size: 2em;
    color: #333;
  }
</style>
