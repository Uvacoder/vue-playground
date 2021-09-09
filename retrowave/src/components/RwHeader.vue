<template>
  <header>
    <div class="container">
      <slot name="logo" />

      <slot name="links">
        Header links goes here
      </slot>
    </div>
  </header>
</template>

<script>
export default {
  name: 'RwHeader',
};
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  z-index: 1066;
  top: 0;
  right: 0;
  left: 0;
  width: 100vw;

  >div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media (max-width: 560px) {
    position: absolute;

    >div {
      justify-content: center;
    }
  }
}
</style>
