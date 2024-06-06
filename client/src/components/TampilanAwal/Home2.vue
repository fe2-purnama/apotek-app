<template>
    <nav>
        <NavMenu />
    </nav>

    <section>
        <div id="HeroMenu">
            <div class="row mt-5 justify-content-center">
                <div class="col-5" id="Collom1">
                    <h1>Apotek Medika Prima</h1>
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

        <div class="container shadow px-5 pt-4" id="tentangKami">
            <br><br><br>
            <h3 class="text-center mb-5">Kenapa Harus Kami</h3>
            <div class="row">
                <div class="col-lg-8">
                    <div class="row">
                        <div class="col-md-6 mb-4" v-for="(feature, index) in features" :key="index">
                            <div class="text-center border border-secondary rounded shadow-sm feature-card">
                                <i :class="feature.icon" class="fs-1 text-success"></i>
                                <h5 class="mt-3">{{ feature.title }}</h5>
                                <p class="text-muted">{{ feature.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="card p-3 shadow-sm animated-card">
                        <img src="@/assets/doctor.jpg" class="card-img-top animated-image" alt="Consulting Doctor">
                        <div>
                            <p>Apotek Sejahtera tidak hanya menyediakan obat-obatan dan produk kesehatan, tetapi juga
                                layanan konsultasi dokter yang terpercaya. Tim dokter kami yang berpengalaman siap
                                memberikan saran medis yang tepat untuk memastikan Anda mendapatkan perawatan yang
                                optimal. Konsultasi ini dapat membantu dalam diagnosis kondisi kesehatan Anda dan
                                memberikan rekomendasi yang tepat sesuai kebutuhan Anda.</p>
                        </div>
                    </div>
                </div>
            </div>
            <br><br>
        </div>

        <div class="container my-5 shadow px-5 pt-4" id="location">
            <h3 class="text-center mb-4">Lokasi Kami</h3>
            <div class="row justify-content-center">
                <div class="col-12">
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe class="embed-responsive-item"
                            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d989.0885824488752!2d109.23345492840804!3d-7.4259829995345985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMjUnMzMuNSJTIDEwOcKwMTQnMDIuOCJF!5e0!3m2!1sen!2sid!4v1716875067622!5m2!1sen!2sid"
                            width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy">
                        </iframe>
                    </div>
                </div>
            </div>
            <br><br>
        </div>
        <div class="container shadow px-5 pt-4 mt-5" id="keunggulanKami">
            <h3 class="text-center mb-5">Keunggulan Kami</h3>
            <div class="row">
                <div class="col-lg-4 mb-4" v-for="(advantage, index) in advantages" :key="index">
                    <div class="text-center border border-secondary rounded shadow-sm feature-card">
                        <i :class="advantage.icon" class="fs-1 text-primary"></i>
                        <h5 class="mt-3">{{ advantage.title }}</h5>
                        <p class="text-muted">{{ advantage.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <Footer/>
</template>

<script>
import Swal from 'sweetalert2'
import NavMenu from "../NavMenu/NavMenu2.vue";
import CardSlider from "../Pages/About/CardSlider.vue"
import Footer from "../Footer/Footer.vue"

export default {
    name: 'Features',
    components: {
        NavMenu,
        CardSlider,
        Footer
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
                {
                    icon: 'bi bi-capsule',
                    title: 'Apotek Terlengkap',
                    description: 'Apotek kami menyediakan berbagai macam obat-obatan dengan harga terjangkau. Kami berkomitmen untuk selalu memperbarui stok dengan produk terbaru dan berkualitas tinggi demi memenuhi kebutuhan kesehatan Anda.'
                },
                {
                    icon: 'bi bi-basket2-fill',
                    title: 'Produk Terlengkap',
                    description: 'Kami juga menyediakan berbagai produk kesehatan lainnya seperti vitamin, suplemen, dan alat kesehatan. Dengan pilihan produk yang beragam, Anda dapat menemukan segala kebutuhan kesehatan Anda di satu tempat.'
                },
                {
                    icon: 'bi bi-heart-pulse-fill',
                    title: 'Pelayanan Nyaman',
                    description: 'Pelayanan kami cepat dan ramah untuk kenyamanan Anda. Kami selalu siap membantu dengan informasi dan saran yang Anda butuhkan agar Anda mendapatkan perawatan terbaik.'
                },
                {
                    icon: 'bi bi-cash',
                    title: 'Harga Terjangkau',
                    description: 'Kami menawarkan harga yang kompetitif dan terjangkau untuk semua produk. Dengan penawaran harga yang adil, kami memastikan setiap pelanggan dapat mengakses produk kesehatan berkualitas tanpa membebani anggaran.'
                }
            ],
            advantages: [
                {
                    icon: 'bi bi-speedometer2',
                    title: 'Layanan Cepat',
                    description: 'Kami memahami bahwa waktu Anda sangat berharga. Oleh karena itu, kami menyediakan layanan cepat dan efisien untuk memastikan Anda mendapatkan apa yang Anda butuhkan tanpa menunggu lama.'
                },
                {
                    icon: 'bi bi-shield-check',
                    title: 'Keamanan Terjamin',
                    description: 'Keamanan produk dan layanan kami adalah prioritas utama. Kami memastikan bahwa setiap produk yang kami sediakan telah melalui proses pemeriksaan ketat dan memenuhi standar keamanan yang tinggi.'
                },
                {
                    icon: 'bi bi-award',
                    title: 'Kualitas Terbaik',
                    description: 'Kami hanya menyediakan produk dengan kualitas terbaik dari merek-merek terpercaya. Anda bisa yakin bahwa setiap produk yang Anda beli dari kami memenuhi standar kualitas tinggi.'
                },
                {
                    icon: 'bi bi-people-fill',
                    title: 'Pelayanan Profesional',
                    description: 'Tim kami terdiri dari tenaga profesional yang berpengalaman dan berdedikasi untuk memberikan layanan terbaik kepada Anda.'
                },
                {
                    icon: 'bi bi-truck',
                    title: 'Pengiriman Cepat',
                    description: 'Kami menawarkan layanan pengiriman cepat dan aman ke lokasi Anda, memastikan produk sampai tepat waktu.'
                },
                {
                    icon: 'bi bi-headset',
                    title: 'Layanan Pelanggan 24/7',
                    description: 'Kami menyediakan layanan pelanggan 24/7 untuk membantu menjawab semua pertanyaan dan kebutuhan Anda kapan saja.'
                }
            ]
        };
    }
}
</script>

<style scoped>
@import 'style.css';
</style>