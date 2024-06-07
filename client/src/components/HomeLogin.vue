<template>
    <section class="container">
        <nav>
            <NavMenu />
        </nav>

        <main class="mt-3">
            <div class=" text-center">
                <img src="../assets/BannerDiskon.png" alt="banner Diskone" width="700px" height="300"
                    class="justify-content-center text-center" />
                <h2 class="mt-4">Rekomendasi Obat</h2>
            </div>

            <div>
                <CardCarosel/>
            </div>

            <div class="row mb-4">

                <div class="col-md-3 ml-4 mt-4">
                    <h3 class="text-center">Produk Lainya</h3>
                    <img src="../assets/promo1.png" alt="" width="250">
                    <img src="../assets/promo2.png" alt="" width="250" class="mt-3">
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
import CardCarosel from "../components/Carosel/CardCarosel.vue"
export default {
    components: {
        NavMenu,
        Footer,
        CardCarosel

    }
} 
</script>

<style scoped>
@import 'style.css';

h2{
    font-family: 'Baloo 2';
    font-weight: 700;
}

nav {
    position: sticky;
    top: 0;
    z-index: 1000;
}
</style>
