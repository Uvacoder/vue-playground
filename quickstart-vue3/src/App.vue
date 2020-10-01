<template>
  <Header logo="V3" />

  <HomePage msg="product page template" />
</template>

<script>
import Header from "./components/Header";
import HomePage from "./components/HomePage";

export default {
  name: "App",
  components: {
    Header,
    HomePage,
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
