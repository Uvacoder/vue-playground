<template>
  <div id="homePage">
    <div class="page-wrapper">
      <div class="breadcrumb">home / {{ msg }}</div>

      <div class="product-display">
        <div class="product-container">
          <div :class="!inStock ? 'out-of-stock-img' : 'product-image'">
            <img :src="require(`../assets/${image}`)" alt="img" />
          </div>

          <div class="product-info">
            <small class="sale">{{ sale }}</small>
            <h1>
              {{ title }}
            </h1>

            <ProductDetails :details="description" />

            <ul>
              <li v-for="d in details" :key="d.id">
                {{ d.name }}
              </li>
            </ul>

            <div class="colors">
              <button
                class="color-circle"
                v-for="(v, index) in variants"
                :key="v.id"
                @mouseenter="updateProduct(index)"
                :style="{ backgroundColor: v.color }"
              />
            </div>

            <br />

            <div class="sizes" v-if="inStock">
              <button class="size" v-for="s in sizes" :key="s.id">
                {{ s.size.toUpperCase() }}
              </button>
            </div>

            <span v-else>Out of Stock</span>

            <br /><br />

            <div v-if="inStock">
              <p>Shipping: {{ shipping }}</p>
            </div>

            <button class="button" :disabled="!inStock" @click="addToCart()">
              Add to cart
            </button>

            <button class="button" v-if="inStock" @click="removeToCart()">
              Remove item
            </button>
          </div>

          <ReviewList v-if="reviews.length" :reviews="reviews" />

          <ReviewForm @review-submitted="addReview" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductDetails from "./ProductDetails";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";

export default {
  name: "HomePage",
  props: {
    msg: String,
    premium: {
      type: Boolean,
      required: true,
    },
  },
  components: {
    ProductDetails,
    ReviewForm,
    ReviewList,
  },
  methods: {
    addToCart() {
      this.$emit("add-to-cart", this.variants[this.selectedVariant].id);
    },
    removeToCart() {
      this.$emit("remove-to-cart", this.variants[this.selectedVariant].id);
    },
    updateProduct(index) {
      this.selectedVariant = index;
    },
    addReview(review) {
      this.reviews.push(review);
    },
  },
  computed: {
    title() {
      return this.product + " - " + this.brand;
    },
    image() {
      return this.variants[this.selectedVariant].image;
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity;
    },
    sale() {
      if (this.onSale) {
        return "on sale";
      }
      return "";
    },
    shipping() {
      if (this.premium) {
        return "free";
      }
      return 2.99;
    },
  },
  data() {
    return {
      product: "Socks",
      brand: "My brand name",
      description: "A nice pair of socks to warm your feet",
      details: [
        { id: "01", name: "50% cotton" },
        { id: "02", name: "30% wool" },
        { id: "03", name: "20% polyester" },
      ],
      sizes: [
        { id: "01", size: "xxs" },
        { id: "02", size: "xs" },
        { id: "03", size: "s" },
        { id: "04", size: "m" },
        { id: "05", size: "l" },
        { id: "06", size: "xl" },
        { id: "07", size: "2xl" },
      ],
      selectedVariant: 0,
      variants: [
        {
          id: "01",
          color: "#2c3e50",
          image: "images/socks_blue.jpg",
          quantity: 50,
        },
        {
          id: "02",
          color: "#42b983",
          image: "images/socks_green.jpg",
          quantity: 0,
        },
      ],
      reviews: [],
      url: "#",
      onSale: true,
    };
  },
};
</script>

<style scoped>
h1 {
  font-size: 30px;
  color: #42b983;
  margin: 15px 0 30px;
}

ul {
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0 0 30px;
}

li {
  text-align: left;
  margin-bottom: 5px;
  font-size: 16px;
}

small {
  padding: 10px;
}
</style>