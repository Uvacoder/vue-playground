<template>
  <Header logo="logo goes here." />

  <HomePage msg="Hello world of vue3" />
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
  text-align: center;
  color: #2c3e50;
}
</style>
