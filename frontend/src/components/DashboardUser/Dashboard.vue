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
            <p><strong>Nama Lengkap:</strong> {{ userInfo.name }}</p>
            <p><strong>Jenis Kelamin:</strong> {{ userInfo.gender }}</p>
            <p><strong>No Handphone:</strong> {{ userInfo.phone }}</p>
          </div>
        </div>
      </div>
      <br><br><br>
      <div class="card mt-3">
        <div class="card-body">
          <h5 class="card-title">Update Biodata</h5>
          <form class="edit-form" @submit.prevent="handleSubmit">
            <div class="form-group" :class="{ 'has-error': nameError }">
              <input class="form-control mb-2" type="text" placeholder="Edit Nama" v-model="name" @input="resetError('name')" />
              <div v-if="nameError" class="error"><i class="fa fa-exclamation-circle"></i> Nama tidak boleh kosong</div>
            </div>
            <div class="form-group" :class="{ 'has-error': genderError }">
              <select class="form-control mb-2" v-model="gender" @change="resetError('gender')">
                <option value="" disabled selected>Pilih Jenis Kelamin</option>
                <option value="Pria">Pria</option>
                <option value="Wanita">Wanita</option>
              </select>
              <div v-if="genderError" class="error"><i class="fa fa-exclamation-circle"></i> Jenis Kelamin tidak boleh kosong</div>
            </div>
            <div class="form-group" :class="{ 'has-error': phoneError }">
              <input class="form-control mb-2" type="tel" placeholder="Edit No Handphone" v-model="phone" @input="resetError('phone')" />
              <div v-if="phoneError" class="error"><i class="fa fa-exclamation-circle"></i> No Handphone tidak boleh kosong</div>
            </div>
            <button class="btn btn-dark" type="submit">Submit</button>
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

// Define user information
const userInfo = ref({
  name: '',
  gender: '',
  phone: ''
});

// Initialize form fields with user information
const name = ref('');
const gender = ref('');
const phone = ref('');

const alertVisible = ref(false);
const nameError = ref(false);
const genderError = ref(false);
const phoneError = ref(false);

const fetchUserInfo = async () => {
  try {
    const response = await axios.get('http://localhost:6009/api/auth/user-info');
    if (response.data.success) {
      const user = response.data.data;
      userInfo.value.name = user.name;
      userInfo.value.gender = user.gender;
      userInfo.value.phone = user.phone;
      // Initialize form fields with fetched user information
      name.value = user.name;
      gender.value = user.gender;
      phone.value = user.phone;
    } else {
      console.error('Failed to fetch user information:', response.data.message);
    }
  } catch (error) {
    console.error('Error fetching user information:', error);
  }
};

onMounted(() => {
  fetchUserInfo();
});

const handleSubmit = async () => {
  nameError.value = !name.value;
  genderError.value = !gender.value;
  phoneError.value = !phone.value;

  if (!nameError.value && !genderError.value && !phoneError.value) {
    try {
      const response = await axios.post('http://localhost:6009/api/auth/update-profile', {
        name: name.value,
        gender: gender.value,
        phone: phone.value
      });

      if (response.data.success) {
        userInfo.value.name = name.value;
        userInfo.value.gender = gender.value;
        userInfo.value.phone = phone.value;

        alertVisible.value = true;
        setTimeout(() => {
          alertVisible.value = false;
        }, 3000);
        console.log('Submitted:', { name: name.value, gender: gender.value, phone: phone.value });
      } else {
        console.error('Update failed:', response.data.message);
      }
    } catch (error) {
      console.error('Update error:', error);
    }
  }
};

const resetError = (field) => {
  if (field === 'name') {
    nameError.value = !name.value;
  } else if (field === 'gender') {
    genderError.value = !gender.value;
  } else if (field === 'phone') {
    phoneError.value = !phone.value;
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