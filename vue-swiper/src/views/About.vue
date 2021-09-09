<template>
  <div class="about">
    <h1>This is an about page</h1>

    <div class="swiper-container hero-carousel">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="https://steamuserimages-a.akamaihd.net/ugc/940586530515504757/CDDE77CB810474E1C07B945E40AE4713141AFD76/" alt="banner">
        </div>
        <div class="swiper-slide">
          <img src="https://steamuserimages-a.akamaihd.net/ugc/940586530515504757/CDDE77CB810474E1C07B945E40AE4713141AFD76/" alt="banner">
        </div>
        <div class="swiper-slide">
          <img src="https://steamuserimages-a.akamaihd.net/ugc/940586530515504757/CDDE77CB810474E1C07B945E40AE4713141AFD76/" alt="banner">
        </div>
        <div class="swiper-slide">
          <img src="https://steamuserimages-a.akamaihd.net/ugc/940586530515504757/CDDE77CB810474E1C07B945E40AE4713141AFD76/" alt="banner">
        </div>
      </div>

      <div class="swiper-pagination"></div>

      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';

import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

export default defineComponent({
  name: 'Home',
  setup() {
    onMounted(() => {
      setTimeout(() => {
        // eslint-disable-next-line no-new
        new Swiper('.hero-carousel', {
          slidesPerView: 1,
          loop: true,
          speed: 400,
          autoplay: {
            delay: 5000,
          },
          navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          },
        });
      }, 500);
    });
  },
});
</script>

<style lang="scss" scoped>
.hero-carousel {
  width: 100vw;
  height: 40vh;
}
</style>
