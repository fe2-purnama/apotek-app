<style scoped>
#productdetails {
    font-family: 'Arial', sans-serif;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    padding-top: 150px;

    h1 {
        text-align: center;
    }
}

#productdetails h1,
#productdetails h2 {
    color: #333;
    font-weight: 600;
}

#container {
    display: flex;
    justify-content: center;
}

.row {
    display: flex;
    justify-content: space-between;
}

.col1,
.col2 {
    flex: 1;
    margin: 40px;
}

.col1 img {
    width: 300px;
    height: auto;
    display: block;
}

.calculator {
    display: flex;
    align-items: center;
    margin-top: 20px;
}

a {
    text-decoration: none;
}

.button {
    background-color: #f2f2f2;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    margin: 0 5px;
    border-radius: 5px;

    &:hover {
        background-color: #4d4d4d;
        color: white;
        transition: 0.3s background-color;
    }
}

#number {
    padding: 10px 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.checkout {
    background-color: #292929;
    color: white;
    padding: 15px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
    display: block;

    &:hover {
        background-color: #0a0303;
    }
}
</style>

<template>
    <nav>
        <NavMenu />
    </nav>

    <div id="productdetails">
        <h1>PRODUCT DETAILS</h1>
        <div id="container">
            <div class="row">
                <div class="col1">
                    <img src="@/assets/Card5.jpg" alt="">
                </div>
                <div class="col2">
                    <h2>Bisolvon Bromhexine HCL</h2>
                    <p>Bisolvon dengan kandungan aktif Bromhexine HCl adalah obat yang digunakan untuk meredakan batuk
                        berdahak.</p>
                    <h2>Anjuran Pakai</h2>
                    <ol>
                        <li>untuk anak usia 2-5 tahun, dosisnya adalah 5 ml, 2 kali sehari</li>
                        <li>untuk anak usia 6-10 tahun, dosisnya adalah 5 ml, 3 kali sehari</li>
                        <li>untuk anak usia di atas 10 tahun, dosisnya adalah 10 ml, 3 kali sehari</li>
                    </ol>
                    <h2>efek samping</h2>
                    <p>Efek samping yang mungkin terjadi termasuk reaksi alergi, gangguan pencernaan, atau gejala lain
                        yang tidak biasa, dan jika terjadi, sebaiknya konsultasi dengan dokter.</p>
                    <!-- quantity -->
                    <div class="calculator">
                        <div class="button" @click="changeValue(-1)">-</div>
                        <div id="number">{{ quantity }}</div>
                        <div class="button" @click="changeValue(1)">+</div>
                    </div>
                    <!-- quantity end-->
                    <!-- checkout -->
                    <a href="/Hero">
                        <button class="checkout">tambah ke keranjang</button>
                    </a>
                </div>
            </div>
        </div>
    </div>

    <footer>
        <Footer />
    </footer>
</template>

<script>
import { ref } from 'vue'
import NavMenu from "@/components/NavMenu/NavMenu.vue";
import Footer from '../Footer/Footer.vue';

export default {
    components: {
        NavMenu,
        Footer
    },
    setup() {
        const quantity = ref(1);

        function changeValue(change) {
            quantity.value += change;
            if (quantity.value < 1) quantity.value = 1; // Prevents quantity from going below 1
        }

        return {
            quantity,
            changeValue
        }
    }
};
</script>