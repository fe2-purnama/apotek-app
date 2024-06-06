<template>
    <section class="container">
        <nav>
            <NavMenu />
        </nav>

        <main class="mt-3">
            <div class=" text-center">
                <img src="../assets/BannerDiskon.png" alt="banner Diskone" width="700px"
                    class="justify-content-center text-center" />
                <h2 class="mt-3">Rekomendasi Obat</h2>
            </div>

            <div>
                <CardCarosel/>
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

nav {
    position: sticky;
    top: 0;
    z-index: 1000;
}
</style>
