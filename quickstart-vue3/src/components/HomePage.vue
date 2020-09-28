<template>
  <div id="homePage">
    <h1>{{ msg }}</h1>

    <button class="button">i'm a button</button>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
h1 {
  color: #42b983;
  text-align: center;
}
</style>