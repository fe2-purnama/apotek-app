<script setup>
import { ref } from 'vue'

const showForm = ref(false)
const username = ref('')
const email = ref('')
const phone = ref('')
const address = ref('')

const handleEditClick = () => {
  showForm.value = true
}

const handleSaveClick = () => {
    //it'll hide the from when you click the save button
    showForm.value = false;
    alert("Data Updated")
}
</script>

<template>
  <div class="username">
    <p>
      Username: {{ username }} <br>
      Email: {{ email }} <br>
      Phone: {{ phone }} <br>
      Address: {{ address }}
    </p>

    <button class="edit" @click="handleEditClick">
      Edit Profile
    </button>

    <button class="logout">
        logout
    </button>

<!-- Form will be displayed when showForm is true -->
    <div v-if="showForm" class="form">
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="username" />

      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" />

      <label for="phone">Phone:</label>
      <input type="tel" id="phone" v-model="phone" />

      <label for="address">Address:</label>
      <textarea id="address" v-model="address"></textarea>

      <button class="save" @click="handleSaveClick">
        Save Changes
      </button>
    </div>
  </div>
</template>

<style scoped>
.username {
    background-color: #f4f4f4;
    margin: 60px;
    padding: 40px;
    border-radius: 20px;
}
.edit {
  background-color: #121212;
  color: white;
  border: 0;
  font-size: 16px;
  padding: 10px;
  border-radius: 8px;
}

.logout {
    background-color: #960c28;
    color: white;
    border: 0;
    font-size: 16px;
    padding: 10px;
    border-radius: 8px;
    margin: 15px;
}

.logout:hover {
    background-color: #ca1237;
}

.edit:hover {
  background-color: #414141;
}

.form {
  margin-top: 20px;
}

.form input,
.form textarea,
.form button {
  display: block;
  width: 40%;
  margin-bottom: 10px;
}

.save {
  background-color: #121212;
  color: white;
  border: 0;
  font-size: 16px;
  padding: 10px;
  border-radius: 8px;
}

.save:hover {
  background-color: #414141;
}
</style>