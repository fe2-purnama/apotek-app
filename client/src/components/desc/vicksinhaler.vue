<style scoped>
#productdetails {
    font-family: 'Arial', sans-serif;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    padding-top: 50px
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
                    <img src="@/assets/Card3.png" alt="">
                </div>
                <div class="col2">
                    <h2>Vicks Inhaler</h2>
                    <p>Vicks Inhaler KeyChain</p>
                    <h2>Anjuran Pakai</h2>
                    <ol>
                        <li>dosis pertama</li>
                        <li>dosis kedua</li>
                        <li>dosis ketiga</li>
                        <li>dan seterusnya</li>
                    </ol>
                    <h2>efek samping</h2>
                    <p>Deskripsi efek samping</p>
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