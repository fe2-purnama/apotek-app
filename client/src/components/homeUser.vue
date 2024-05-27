<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const username = ref('');
const router = useRouter();

onMounted(() => {
  const storedUsername = localStorage.getItem('username');
  if (storedUsername) {
    username.value = storedUsername;
  } else {
    router.push({ name: 'login' });
  }
});
</script>

<template>
  <div>
    <h1>TESTING HOME UPDATE, {{ username }}</h1>
  </div>
</template>

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
