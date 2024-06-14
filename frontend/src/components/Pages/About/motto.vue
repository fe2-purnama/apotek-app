<script>

</script>

<template>

<div class="header">
    <p style="text-align: center; font-size: 35px; font-weight: 500;">
        Kenapa harus memilih kami ?
    </p>
</div>

<div class="container">
  <div class="row">
    <div class="col">
      <img src="F:\html-css, JQuery, JS\Capstone\about\src\assets\scientist.jpg" alt="Poin Pertama" class="img-responsive">
    </div>
    <div class="col">
      <h2>Poin Pertama</h2>
      <p>Apotek kami adalah pilihan terbaik karena kami selalu mengutamakan kualitas dan kepuasan pelanggan. Kami menyediakan berbagai macam obat-obatan dengan harga yang terjangkau dan pelayanan yang cepat serta ramah.</p>
    </div>
  </div>
  
  <div class="row">
    <div class="col">
        <h2>Poin Kedua</h2>
      <p>Tim apoteker kami profesional dan berpengalaman, siap memberikan konsultasi kesehatan yang tepat dan akurat. Selain itu, apotek kami juga menjamin keaslian dan kualitas produk, memastikan bahwa setiap obat yang Anda beli adalah produk resmi dan aman digunakan.</p>
    </div>
    <div class="col">
        <img src="F:\html-css, JQuery, JS\Capstone\about\src\assets\doctor.jpg" alt="Poin Kedua" class="img-responsive">
    </div>
  </div>
  
  <div class="row">
    <div class="col">
      <img src="F:\html-css, JQuery, JS\Capstone\about\src\assets\medicine.jpg" alt="Poin Ketiga" class="img-responsive">
    </div>
    <div class="col">
      <h2>Poin Ketiga</h2>
      <p>Dengan lokasi yang strategis dan kemudahan akses Berkomunikasi melalui platform media sosial, apotek kami hadir untuk memenuhi kebutuhan kesehatan Anda kapan saja.</p>
    </div>
  </div>
</div>


</template>

<style scoped>

  .container {
    max-width: 1170px;
    margin: auto;
    overflow: hidden;
  }
  
  .row {
    display: flex;
    flex-wrap: wrap;
    padding: 15px;
    margin-right: -15px;
    margin-left: -15px;
  }
  
  .col {
    flex: 1;
    padding: 0 15px;
  }
  
  .img-responsive {
    max-width: 100%;
    height: auto;
  }

  p {
    text-align: justify;
  }

  img {
    width: 400px;
    height: auto;
    border-radius: 15px;
  }
  h2 {
  text-align: center;
}
</style>