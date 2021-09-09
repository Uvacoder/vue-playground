<template>
  <div class="home">
    <VueAgile :options="slideOptions">
      <div
        v-for="slide in 10"
        :key="slide + Math.random()"
        class="slide"
      >
        <img src="https://steamuserimages-a.akamaihd.net/ugc/940586530515504757/CDDE77CB810474E1C07B945E40AE4713141AFD76/" alt="banner">
        <h2>Slide {{ slide }}</h2>
      </div>
    </VueAgile>
  </div>
</template>

<script>
import { VueAgile } from 'vue-agile';

export default {
  name: 'Home',
  components: { VueAgile },
  setup() {
    const slideOptions = {
      autoplay: true,
      autoplaySpeed: 2000,
      changeDelay: 150,
      centerMode: false,
      dots: true,
      navButtons: true,
      fade: false,
      infinite: true,
      pauseOnHover: false,
      pauseOnDotsHover: false,
      slidesToShow: 2,
      speed: 500,
      swipeDistance: 50,
      throttleDelay: 500,
      timing: 'ease',
      responsive: [
        {
          breakpoint: 0,
          settings: {
            dots: false,
            navButtons: false,
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 640,
          settings: {
            dots: true,
            navButtons: true,
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 1280,
          settings: {
            dots: true,
            navButtons: true,
            slidesToShow: 4,
          },
        },
      ],
    };

    return {
      slideOptions,
    };
  },
};
</script>

<style lang="scss">
  .slide {
    img {
      width: 100%;
      height: 45vh;
      object-fit: cover;
    }
  }
</style>
