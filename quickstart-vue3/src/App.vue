<template>
  <Header logo="V3" />

  <div class="cart">Cart({{ cart.length }})</div>

  <ProductDisplay
    msg="product display template"
    :premium="premium"
    @add-to-cart="updateCart"
    @remove-to-cart="decrementCart"
  />
</template>

<script>
import Header from "./components/Header";
import ProductDisplay from "./components/ProductDisplay";

export default {
  name: "App",
  components: {
    Header,
    ProductDisplay,
  },
  methods: {
    updateCart(id) {
      this.cart.push(id);
    },
    decrementCart(id) {
      let index = this.cart.indexOf(id);

      if (index > -1) {
        this.cart.splice(index, 1);
      }
    },
  },
  data() {
    return {
      cart: [],
      premium: true,
    };
  },
};
</script>

<style>
@import "./assets/style.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
