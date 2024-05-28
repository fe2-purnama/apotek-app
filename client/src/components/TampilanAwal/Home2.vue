<style scoped>
@import './style.css';
</style>



<template>
    <nav>
        <NavMenu />
    </nav>

    <section>
        <div id="HeroMenu">
            <div class="row mt-5 justify-content-center">
                <div class="col-5" id="Collom1">
                    <h1>Apotik Sejahtera</h1>
                    <p>Selamat datang di Apotek Sejahtera, tempat Anda mendapatkan solusi kesehatan terbaik dengan
                        pelayanan prima. Apotek Sejahtera berdedikasi untuk memberikan layanan farmasi yang handal,
                        aman, dan terpercaya bagi seluruh masyarakat. Kami menyediakan berbagai macam obat-obatan,
                        vitamin, suplemen, serta produk kesehatan lainnya yang berkualitas tinggi dan terjangkau.</p>
                    <button class="btn btn-dark ">Lihat Selengkapnya</button>
                </div>
                <div class="col-5 text-center">
                    <img src="@/assets/Apotek2.png" alt="">
                </div>
            </div>
        </div>

        <CardSlider />
    </section>
</template>

<script>
import NavMenu from "../NavMenu/NavMenu2.vue";
import CardSlider from "../About/CardSlider.vue"

export default {
    components: {
        NavMenu,
        CardSlider
    }
}


</script>