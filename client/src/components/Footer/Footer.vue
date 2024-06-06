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
          <a href="#" class="fa fa-instagram"></a>
          <a href="#" class="fa fa-facebook"></a>
          <a href="https://wa.me/6282258631580?text=Halo%20dok,%20saya%20ingin%20melakukan%20konsultasi" class="fa fa-whatsapp"></a>
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
</style>
