<template>
  <h2
    class="title"
    :style="colorClass"
  >
    {{ label }}
  </h2>
</template>

<script>
import { computed } from 'vue';

export default {
  name: 'RwTitle',
  props: {
    label: {
      type: String,
      required: true,
      default: '',
    },
    color: {
      type: String,
      required: false,
      default: '',
    },
  },
  setup(props) {
    const colorClass = computed(() => `color: ${props.color}`);

    return {
      colorClass,
    };
  },
};
</script>

<style lang="scss">
.title {
  font-size: 4rem;
  line-height: 100%;
  color: var(--primary);
  font-weight: 700;
  letter-spacing: .05em;
  margin: 0 0 2rem;

  @media (max-width: 560px) {
    font-size: 3rem;
  }
}
</style>
