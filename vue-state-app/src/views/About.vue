<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>Counter also works here...</h2>

    <h3 class="counter">
      {{ store.state.counter }}
    </h3>
  </div>
</template>

<script>
import { inject } from 'vue'

export default {
  setup() {
    const store = inject('store')

    return {
      store
    }
  }
}
</script>
