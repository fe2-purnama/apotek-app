<template>
  <section class="container" id="HeroMenu">
    <nav>
      <NavMenu />
    </nav>
    <h2 class="mt-5">Keranjang</h2>
    <div class="row">
      <div class="col-6" id="Checkout">
        <input type="text" placeholder="Inputkan lokasi pengiriman" class="form-control border-black">
      </div>
      <div class="col-6 shadow p-4 border-black" id="TotalBayar">
        <div id="checkout">
          <h1>Checkout</h1>
          <template v-if="cartItems.length > 0">
            <div v-for="item in cartItems" :key="item._id" class="cart-item">
              <input type="checkbox" v-model="item.selected" class="item-checkbox">
              <div class="cart-item-details">
                <p>Product: {{ item.name_product }}</p>
                <p>Price: Rp {{ item.price_product }}</p>
                <p>Quantity: {{ item.quantity }}</p>
                <p>Total: Rp {{ item.price_product * item.quantity }}</p>
              </div>
              <div class="cart-item-actions">
                <button @click="editCartItem(item)">Edit</button>
                <button @click="deleteCartItem(item._id)">Delete Selected</button>
              </div>
            </div>
          </template>
          <template v-else>
            <p>Keranjang belanja Anda kosong.</p>
          </template>
          <p v-if="cartItems.length > 0">Tax (0.1%): Rp {{ tax.toFixed(2) }}</p>
          <p v-if="cartItems.length > 0">Total Price: Rp {{ totalPrice.toFixed(2) }}</p>
          <select v-if="cartItems.length > 0">
            <option value="null">Pilih metode pembayaran</option>
            <option value="qris">Bayar dengan QRIS</option>
            <option value="transfer">Transfer Bank</option>
            <option value="indomaret">Bayar di Indomaret</option>
            <option value="alfamart">Bayar di Alfamart</option>
          </select>
          <button v-if="cartItems.length > 0" @click="proceedToCheckout">Proceed to Checkout</button>
        </div>
      </div>
    </div>
    <br>
    <footer class="mt-5">
      <Footer />
    </footer>
  </section>
</template>

<script>
import NavMenu from "@/components/NavMenu/NavMenu.vue"; 
import Footer from '../Footer/Footer.vue';
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';

export default {
  components: {
    NavMenu,
    Footer
  },
  setup() {
    const price = ref(0);
    const quantity = ref(0);
    const cartItems = ref([]);

    const authToken = localStorage.getItem('authToken');
    const userData = JSON.parse(localStorage.getItem('userData'));
    const userId = userData ? userData._id : null;

    if (!authToken || !userId) {
      alert('Anda perlu login terlebih dahulu.');
      return;
    }

    const fetchCartItems = async () => {
      try {
        const response = await axios.get('http://localhost:6009/api/cart/cart-items', {
          headers: {
            Authorization: `Bearer ${authToken}`
          }
        });
        
        cartItems.value = response.data.map(item => ({
          _id: item._id,
          name_product: item.name_product,
          price_product: item.price_product,
          quantity: item.quantity,
          total_price: item.total_price,
          selected: false 
        }));

        price.value = cartItems.value.reduce((acc, item) => acc + (item.price_product * item.quantity), 0);
        quantity.value = cartItems.value.reduce((acc, item) => acc + item.quantity, 0);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    onMounted(() => {
      fetchCartItems();
    });

    const taxRate = 0.1; 
    const tax = computed(() => price.value * taxRate);
    const totalPrice = computed(() => price.value + tax.value);

    const updateCart = async (item, quantityChange, operation) => {
      try {
        await axios.post('http://localhost:6009/api/cart/edit-cart-item', {
          cartItemId: item._id,
          quantityChange: Math.abs(quantityChange),
          operation
        }, {
          headers: {
            Authorization: `Bearer ${authToken}`
          }
        });
        fetchCartItems(); // Refresh the cart items after updating
      } catch (error) {
        console.error('Error updating cart item:', error);
      }
    };

    const editCartItem = async (item) => {
      const newQuantity = prompt(`Enter new quantity for ${item.name_product}:`, item.quantity);
      if (newQuantity !== null) {
        const parsedQuantity = parseInt(newQuantity);
        if (!isNaN(parsedQuantity) && parsedQuantity > 0) {
          const quantityChange = parsedQuantity - item.quantity;
          await updateCart(item, quantityChange, quantityChange > 0 ? 'increase' : 'decrease');
        } else {
          alert('Please enter a valid quantity.');
        }
      }
    };

    const deleteCartItem = async (cartItemId) => {
      try {
        await axios.post('http://localhost:6009/api/cart/edit-cart-item', {
          cartItemId,
          quantityChange: 0, // This indicates deletion
          operation: 'decrease'
        }, {
          headers: {
            Authorization: `Bearer ${authToken}`
          }
        });
        fetchCartItems(); // Refresh the cart items after deletion
      } catch (error) {
        console.error('Error deleting cart item:', error);
      }
    };

    const proceedToCheckout = () => {
      const selectedItems = cartItems.value.filter(item => item.selected);
      console.log('Selected items:', selectedItems);
    };

    return {
      price,
      quantity,
      tax,
      totalPrice,
      cartItems,
      proceedToCheckout,
      editCartItem,
      deleteCartItem
    };
  }
}
</script>

<style scoped>
@import './style.css';
/* Styling for cart items */
.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  padding: 10px;
}

.item-checkbox {
  margin-right: 10px;
}

.cart-item-details {
  flex-grow: 1;
}

.cart-item-actions {
  display: flex;
  align-items: center;
}

.cart-item-actions button {
  margin-left: 5px;
}
</style>
