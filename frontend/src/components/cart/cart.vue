<style scoped>
@import './style.css';
</style>

<template>

    <section class="container" id="HeroMenu">
        <nav>
            <NavMenu />
        </nav>
        <h2 class="mt-5">Keranjang</h2>
        <div class="row">
            <div class="col-6" id="Checkout">
                <input type="text" placeholder="inputkan lokasi pengiriman" class="form-control border-black">
                
            </div>
            <div class="col-6 shadow p-4 border-black" id="TotalBayar">
                <div id="checkout">
                    <h1>Checkout</h1>
                    <p>Price: Rp {{ price }}</p>
                    <p>Quantity: {{ quantity }}</p>
                    <p>Tax (0.1%): Rp {{ tax.toFixed(2) }}</p>
                    <p>Total Price: Rp {{ totalPrice.toFixed(2) }}</p>
                </div>

                <select>
                  <option value="null">pilih metode pembayaran</option>
                  <option value="qris">Bayar dengan QRIS</option>
                  <option value="transfer">Transfer Bank</option>
                  <option value="indomaret">Bayar di Indomaret</option>
                  <option value="alfamart">Bayar di Alfamart</option>
                </select>

            </div>
        </div>

        <br>
        <footer class="mt-5">
            <Footer/>
        </footer>

    </section>
</template>

<script>
import NavMenu from "@/components/NavMenu/NavMenu.vue"; 
import Footer from '../Footer/Footer.vue';
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
  components: {
    NavMenu,
    Footer
  },
  setup() {
    const route = useRoute();
    const price = ref(parseFloat(route.query.price));
    const quantity = ref(parseInt(route.query.quantity));

    // Calculate tax and total price
    const taxRate = 0.1; // 0.5%
    const tax = computed(() => price.value * quantity.value * taxRate);
    const totalPrice = computed(() => (price.value * quantity.value) + tax.value);

    return {
      price,
      quantity,
      tax,
      totalPrice
    };
  }
}
</script>