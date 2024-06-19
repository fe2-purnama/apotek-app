<template>
  <div class="dashboard">
    <NavMenu />
    <br>
    <br>
    <br>
    <div class="content">
      <h1>Dashboard</h1>
      <div class="spacer"></div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Informasi Pengguna</h5>
          <div class="user-info">
            <p><strong>Nama Lengkap:</strong> {{ updatedUser.name_user }}</p>
            <p><strong>Jenis Kelamin:</strong> {{ updatedUser.gender_user }}</p>
            <p><strong>Nomor Telp.:</strong> {{ updatedUser.phone_user }}</p>
            <p><strong>Email :</strong> {{ updatedUser.email_user }}</p>
          </div>
        </div>
      </div>
      <br><br><br>
      <div class="card mt-3">
        <div class="card-body">
          <h5 class="card-title">Update Biodata</h5>
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
              <label for="address">Alamat :</label>
              <textarea id="adress" v-model="updatedUser.address_user" required></textarea>
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

.user-info {
  margin-bottom: 20px;
}

.user-info p {
  margin: 5px 0;
}

.edit-form {
  display: flex;
  flex-direction: column;
}

.edit-form .form-group {
  position: relative;
}

.edit-form .form-control {
  margin-bottom: 10px;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.edit-form .form-group.has-error .form-control {
  border-color: #dc3545;
  background-color: #f8d7da;
  padding-right: 2.25rem;
}

.edit-form .error {
  color: #dc3545;
  font-size: 0.875rem;
  position: absolute;
  top: 50%;
  right: 0.75rem;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
}

.edit-form .error i {
  margin-right: 5px;
}

.edit-form .btn {
  align-self: flex-start;
}

.alert {
  width: 100%;
  max-width: 600px;
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 10px;
}

.alert-success {
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>