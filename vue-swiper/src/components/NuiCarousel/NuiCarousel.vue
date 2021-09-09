<template>
  <div
    class="nui-carousel swiper-container"
    :class="carouselNameClass"
  >
    <div class="swiper-wrapper">
      <slot />
    </div>

    <slot name="controls" />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  reactive,
  onMounted,
} from 'vue';

import Swiper, {
  SwiperOptions,
  Navigation,
  Pagination,
  Autoplay,
} from 'swiper';

import { NuiCarouselProps, useNuiCarouselProps } from './NuiCarouselCommons';

Swiper.use([Navigation, Autoplay, Pagination]);

export default defineComponent({
  name: 'NuiCarousel',
  props: useNuiCarouselProps,
  setup(props: NuiCarouselProps) {
    const carouselNameClass = computed<string>(() => props.carouselName);
    const carouselOptions = reactive<SwiperOptions>(props.options);
    const slide = new Swiper(`.${props.carouselName}`, carouselOptions);

    onMounted(() => {
      slide.init();
    });

    return {
      carouselNameClass,
    };
  },
});
</script>

<style lang="scss">
  .nui-carousel {
    position: relative;
    margin: 0;
    padding: 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
</style>
