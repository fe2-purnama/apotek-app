<template>
  <div class="dashboard">
    <NavMenu />
    <div class="content">
      <h1>Dashboard</h1>
      <div class="spacer"></div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Informasi Pengguna</h5>
          <div class="user-info">
            <p><strong>Nama Lengkap:</strong> Budi Hartanto</p>
            <p><strong>Jenis Kelamin:</strong> Pria</p>
            <p><strong>No Handphone:</strong> 0821 2637 1923</p>
          </div>
        </div>
      </div>
      <br><br><br>
      <div class="card mt-3">
        <div class="card-body">
          <h5 class="card-title">Update Biodata</h5>
          <form class="edit-form" @submit.prevent="handleSubmit">
            <input class="form-control mb-2" type="text" placeholder="Edit Nama" v-model="name" />
            <div v-if="!name" class="alert alert-danger">Nama tidak boleh kosong</div>
            <select class="form-control mb-2" v-model="gender">
              <option value="" disabled selected>Pilih Jenis Kelamin</option>
              <option value="Pria">Pria</option>
              <option value="Wanita">Wanita</option>
            </select>
            <div v-if="!gender" class="alert alert-danger">Jenis Kelamin tidak boleh kosong</div>
            <input class="form-control mb-2" type="tel" placeholder="Edit No Handphone" v-model="phone" />
            <div v-if="!phone" class="alert alert-danger">No Handphone tidak boleh kosong</div>
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
import { ref } from 'vue';
import NavMenu from '../NavMenu/NavMenu.vue';  // Pastikan jalur ini benar

const name = ref('');
const gender = ref('');
const phone = ref('');
const alertVisible = ref(false);

const handleSubmit = () => {
  if (name.value && gender.value && phone.value) {
    alertVisible.value = true;
    setTimeout(() => {
      alertVisible.value = false;
    }, 3000);
    console.log('Submitted:', { name: name.value, gender: gender.value, phone: phone.value });
  }
};
</script>

<style scoped>
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
  /* Tambahkan spacer untuk jarak antara judul dan card */
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

.edit-form .form-control {
  margin-bottom: 10px;
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

.alert-danger {
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}
</style>