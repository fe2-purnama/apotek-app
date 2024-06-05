<script>
export default {
  data() {
    return {
      quantity: 1
    };
  },
  methods: {
    changeValue(change) {
      this.quantity += change;
      if (this.quantity < 1) this.quantity = 1; // Prevents quantity from going below 1
    }
  }
};
</script>

<template>
  <div>
    <h1>PRODUCT DETAILS</h1>
    <div id="container">
      <div class="row">
        <div class="col1">
          <p>taruh foto produk disini</p>
        </div>
        <div class="col2">
          <h2>nama produk</h2>
          <p>Deskripsi obat</p>
          <h2>Anjuran Pakai</h2>
          <ol>
            <li>dosis pertama</li>
            <li>dosis kedua</li>
            <li>dosis ketiga</li>
            <li>dan seterusnya</li>
          </ol>
          <h2>efek samping</h2>
          <p>Deskripsi efek samping</p>
          <!-- quantity -->
          <div class="calculator">
            <div class="button" @click="changeValue(-1)">-</div>
            <div id="number">{{ quantity }}</div>
            <div class="button" @click="changeValue(1)">+</div>
          </div>
          <!-- quantity end-->
          <!-- checkout -->
          <button class="checkout">tambah ke keranjang</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style sscoped>

h1 {
    text-align: center;
}

.col1 {
    background-color: #c6c7c7;
    width: 350px;
    height: 350px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
        position: relative;
        font-size: 24px;
        font-weight: 600;
    }
}

    /* Mengatur col2 agar berada di samping col1 */
.row {
    display: flex;
    justify-content: center;
}

.col1, .col2 {
    margin: 50px;
}

.col2 .checkout {
    border: 0;
    background-color: #131313;
    padding: 15px;
    border-radius: 7px;
    color: white;
    font-size: 16px;
    transition: background-color 0.3s;
    &:hover {
            background-color: #535353;
    }
}

/* Items Quantity */
.calculator {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}

.button {
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size: 20px;
  margin: 0 5px; /* Adjusts spacing between buttons */
  padding: 10px;
  width: 30px;
  height: 30px;
  border: 1px solid #ccc; /* Adds a border to the button */
  cursor: pointer; /* Changes cursor to pointer on hover */
  border-radius: 5px;
  transition: background-color 0.2s;
  &:hover{
    background-color: #6d6d6d;
    color: white;
  }
}

</style>