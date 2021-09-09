<template>
  <nui-carousel
    carousel-name="hero-carousel"
    :options="myOptions"
  >
    <nui-slide
      v-for="slide in 10"
      :key="slide + Math.random()"
    >
      <img src="https://steamuserimages-a.akamaihd.net/ugc/940586530515504757/CDDE77CB810474E1C07B945E40AE4713141AFD76/" alt="banner">
      <h2>Slide {{ slide }}</h2>
    </nui-slide>

    <template #controls>
      <div class="swiper-button-prev" />
      <div class="swiper-button-next" />
    </template>
  </nui-carousel>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import NuiCarousel from '../components/NuiCarousel/NuiCarousel.vue';
import NuiSlide from '../components/NuiSlide/NuiSlide.vue';

export default defineComponent({
  name: 'Home',
  components: {
    NuiCarousel,
    NuiSlide,
  },
  data() {
    return {
      myOptions: {
        direction: 'horizontal',
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        autoplay: {
          delay: 2000,
        },
      },
    };
  },
});
</script>

<style lang="scss" scoped>
.hero-carousel {
  width: 100vw;
  height: 40vh;
}
</style>
