<template>
  <div class="nui-slide swiper-slide">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NuiSlide',
});
</script>

<style lang="scss">
  .nui-slide {
    position: relative;
  }
</style>
