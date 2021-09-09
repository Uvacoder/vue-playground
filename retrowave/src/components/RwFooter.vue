<template>
  <footer class="container">
    <slot>
      Footer copy goes here
    </slot>
  </footer>
</template>

<script>
export default {
  name: 'RwFooter',
};
</script>

<style lang="scss" scoped>
  footer {
    text-align: center;
    padding: 2rem 0;
  }
</style>
