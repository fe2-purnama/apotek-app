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
                <img src="@/assets/paracetamol.png" width="300px" height="300px"alt="" >
                <h5>Paracetamol</h5>
                <h6>Rp 5.000</h6>
            </div>
            <div class="col-6 shadow p-4 border-black" id="TotalBayar">
                <h4>Detail Pembayaran</h4>
                <h6>Total pembayaran : </h6>
                <h5 class="text-end">Nama Barang</h5>
                <br>
                <hr>
                <h6>TOTAL: </h6>
            </div>
        </div>

        <br>
        <footer class="mt-5">
            <Footer/>
        </footer>

    </section>
</template>

<script >
import NavMenu from "@/components/NavMenu/NavMenu.vue"; 
import Footer from '../Footer/Footer.vue';
export default {
    components: {
        NavMenu,
        Footer
    }
}
</script>