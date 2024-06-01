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

        <br />

        <div class="container  shadow px-5 pt-4" id="tentangKami">
            <h3 class="text-center mb-5">Kenapa Harus Kami</h3>
            <div class="row">
                <div class="col-lg-8">
                    <div class="row">
                        <div class="col-md-6 mb-4" v-for="(feature, index) in features" :key="index">
                            <div class="text-center border border-secondary rounded shadow-sm">
                                <i :class="feature.icon" class="fs-1 text-success"></i>
                                <h5 class="mt-3">{{ feature.title }}</h5>
                                <p class="text-muted">
                                    We get insulted by others, lose trust for those We get back freezes
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="card p-3 shadow-sm">
                        <img src="@/assets/doctor.jpg" class="card-img-top" alt="...">
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa possimus quisquam suscipit
                                pariatur eum vel eius sed libero ut optio!</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Swal from 'sweetalert2'
import NavMenu from "../NavMenu/NavMenu2.vue";
import CardSlider from "../Pages/About/CardSlider.vue"


export default {
name: 'Features',
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
    },

    data() {
    return {
      features: [
        
            { icon: 'bi bi-capsule', title: 'Apotek Terlengkap' },
            { icon: 'bi bi-capsule', title: 'Apotek Terlengkap' },
            { icon: 'bi bi-heart-pulse-fill', title: 'Pelayanan Nyaman' },
            { icon: 'bi bi-clipboard2-pulse-fill', title: 'Konsultasi Dokter' },
       
      ]
    };
  }
}
</script>

<style scoped>
@import 'style.css';
</style>