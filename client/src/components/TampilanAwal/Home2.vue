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
                    <button class="btn btn-dark" @click="showMoreInfo">Lihat Selengkapnya</button>
                    <div class="text-left mt-1 gap-1 d-flex" id="icon">
                        <button class="btn btn-outline-dark rounded-circle icon-btn btn-sm shadow-sm"
                            data-aos="fade-down" data-aos-duration="1000" data-aos-delay="200"
                            onclick="window.location.href='https://www.instagram.com/ginda.sann/'">
                            <i class="bi bi-instagram"></i>
                        </button>
                        <button class="btn btn-outline-dark rounded-circle icon-btn btn-sm shadow-sm"
                            data-aos="fade-down" data-aos-duration="1000" data-aos-delay="500"
                            onclick="window.location.href='https://www.tiktok.com/@ginda.sann'">
                            <i class="bi bi-tiktok"></i>
                        </button>
                        <button class="btn btn-outline-dark rounded-circle icon-btn btn-sm shadow-sm"
                            data-aos="fade-down" data-aos-duration="1000" data-aos-delay="800"
                            onclick="window.location.href='#'">
                            <i class="bi bi-facebook"></i>
                        </button>
                        <button class="btn btn-outline-dark rounded-circle icon-btn btn-sm shadow-sm"
                            data-aos="fade-down" data-aos-duration="1000" data-aos-delay="1100"
                            onclick="window.location.href='#'">
                            <i class="bi bi-whatsapp"></i>
                        </button>
                    </div>
                </div>
                <div class="col-5 text-center">
                    <img src="@/assets/Apotek2.png" alt="Apotek Image" class="responsive-img">
                </div>
            </div>
        </div>

        <CardSlider />
    </section>
</template>

<script>
import Swal from 'sweetalert2'
import NavMenu from "../NavMenu/NavMenu2.vue";
import CardSlider from "../Pages/About/CardSlider.vue"

export default {
    components: {
        NavMenu,
        CardSlider
    },
    methods: {
        showMoreInfo() {
            Swal.fire({
                title: 'Informasi Lengkap',
                text: 'Apotek Sejahtera menyediakan berbagai macam obat-obatan, vitamin, suplemen, serta produk kesehatan lainnya yang berkualitas tinggi dan terjangkau. Lihat halaman produk kami untuk informasi lebih lanjut.',
                icon: 'info',
                confirmButtonText: 'Tutup'
            });
        }
    }
}
</script>

<style scoped>
/* Include your styles here */
.responsive-img {
    max-width: 100%;
    height: auto;
}
</style>