<template>
    <section class="container">
        <nav>
            <NavMenu />
        </nav>

        <main class="mt-3">
            <div class="text-center">
                <img src="../assets/BannerDiskon.png" alt="banner Diskone" width="700px" height="300"
                    class="justify-content-center text-center" />
                <h2 class="mt-4">Rekomendasi Obat</h2>
            </div>

            <div>
                <CardCarosel />
            </div>

            <div class="row mb-4">
                <div class="col-md-3 ml-4 mt-4">
                    <h3 class="text-center">Produk Lainya</h3>
                    <a href="#">
                        <img src="../assets/promo1.png" alt="" width="250" />
                        <img src="../assets/promo2.png" alt="" width="250" class="mt-3" />
                    </a>
                </div>

                <div class="col-md-9">
                    <div class="container1">
                        <div class="card">
                            <a href="/desc_stimuno">
                                <img src="../assets/Card4.png" alt="Stimuno Imuno Syrup" />
                                <h2>Stimuno Imuno Syrup</h2>
                                <p>Obat Vitamin Syrup Anak</p>
                                <p>Rp 25.000</p>
                            </a>
                        </div>
                        <div class="card">
                            <a href="/desc_vicksinhaler">
                                <img src="../assets/Card3.png" alt="Vicks Inhaler KeyChain" />
                                <h2>Vicks Inhaler KeyChain</h2>
                                <p>Obat Pilek Inhaler Vicks</p>
                                <p>Rp 17.000</p>
                            </a>
                        </div>
                        <div class="card">
                            <a href="/desc_antimo">
                                <img src="../assets/Card1.png" alt="Antimo Anak Rasa Jeruk Sachet" />
                                <h2>Antimo Anak Rasa Jeruk Sachet</h2>
                                <p>Obat Syrup untuk mabuk perjalanan</p>
                                <p>Rp.2500</p>
                            </a>
                        </div>
                        <div class="card">
                            <a href="/desc_bisolvon">
                                <img src="../assets/Card5.jpg" alt="Bisolvon Bromhexine HCL" />
                                <h2>Bisolvon Bromhexine HCL</h2>
                                <p>Obat Batuk Berdahak Anak</p>
                                <p>Rp 45.000</p>
                            </a>
                        </div>
                        <div class="card">
                            <a href="desc_procold">
                                <img src="../assets/procold.jpg" alt="Procold Flu dan Batuk" />
                                <h2>Procold Flu dan Batuk</h2>
                                <p>Obat sakit kepala, dan hidung tersumbat</p>
                                <p>Rp 4.725</p>
                            </a>
                        </div>
                        <div class="card">
                            <a href="/desc_ibuprofen">
                                <img src="../assets/Card6.png" alt="Ibuprofen" />
                                <h2>Ibuprofen</h2>
                                <p>Deskripsi Ibuprofen</p>
                                <p>Rp 50.000</p>
                            </a>
                        </div>
                    </div>

                    <div class="pagination">
                        <a href="#">&laquo;</a>
                        <a href="#" class="active">1</a>
                        <a href="#">2</a>
                        <a href="#">3</a>
                        <a href="#">4</a>
                        <a href="#">...</a>
                        <a href="#">10</a>
                        <a href="#">11</a>
                        <a href="#">12</a>
                        <a href="#">&raquo;</a>
                    </div>
                </div>
            </div>
        </main>

        <footer>
            <Footer />
        </footer>
    </section>
</template>

<script>
import NavMenu from "../components/NavMenu/NavMenu.vue";
import Footer from "../components/Footer/Footer.vue";
import CardCarosel from "../components/Carosel/CardCarosel.vue";
export default {
  components: {
    NavMenu,
    Footer,
    CardCarosel,
  },
};
</script>

<style scoped>
@import "style.css";

h2 {
  font-family: "Baloo 2";
  font-weight: 700;
}

nav {
  position: sticky;
  top: 0;
  z-index: 1000;
}
</style>
