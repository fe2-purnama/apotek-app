<script>
export default {
  name: 'Footer',
  methods: {
    submitForm() {
      // Handle form submission logic here
      alert('Form submitted!');
    }
  }
};
</script>

<template>
<footer>
  <div class="footer-container w-full" id="footer">
    <div class="footer-section">
      <h4>Hubungi Kami</h4>
      <div class="social-icons">
        <a href="https://www.instagram.com/apotekmedikaprima/" class=" bi bi-instagram"></a>
        <a href="mailto:medikaprima19@gmail.com"class=" bi bi-envelope-fill"></a>
        <a href="https://wa.me/6281228900185?text=Halo%20dok,%20saya%20ingin%20melakukan%20konsultasi" class="bi bi-whatsapp"></a>
      </div>
    </div>
    <div class="footer-section">
      <h4>Tentang Kami</h4>
      <a href="#">Tentang Kami</a>
      <a href="#">Syarat & Ketentuan</a>
      <a href="#">Privacy Policy</a>
    </div>
    <div class="footer-section">
      <h4>Apotek Care</h4>
      <a href="#">Dashboard</a>
      <a href="#">Temukan Lokasi</a>
    </div>
    <div class="footer-section">
      <h4>Temukan Promo Menarik Lainnya</h4>
      <form @submit.prevent="submitForm">
        <input type="email" placeholder="Your email..." required />
        <button class="btn btn-dark btn-sm" type="submit">Sign Up</button>
      </form>
    </div>
  </div>
</footer>
</template>

<!-- <style lang="scss" scoped src="./style.scss"></style> -->
<style>
@import './style.css';

/* Additional styling for the footer and social icons */
.footer-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
  background-color: #f8f8f8;
}

.footer-section {
  flex: 1;
  min-width: 200px;
  margin: 10px;
}

.footer-section h4 {
  margin-bottom: 10px;
}

.footer-section a {
  display: block;
  margin-bottom: 5px;
  color: #333;
  text-decoration: none;
}

.social-icons {
  display: flex;
  gap: 10px;
}

.social-icons a {
  font-size: 24px;
  color: #333;
  text-decoration: none;
  transition: color 0.3s;
}

.social-icons a:hover {
  color: #007bff;
}
</style>
