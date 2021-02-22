<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />

    <div class="counter">{{ store.state.counter }}</div>

    <div class="buttons">
      <button @click="store.methods.decrease">-</button>
      <button @click="store.methods.increase">+</button>
    </div>
  </div>
</template>

<script>
import { inject } from 'vue'

export default {
  name: 'Home',
  setup() {
    const store = inject('store')

    return {
      store
    }
  }
}
</script>

<style scoped>
.counter {
  font-size: 60px;
  margin-bottom: 10px;
}

.buttons button {
  cursor: pointer;
  width: 60px;
  font-size: 24px;
  outline: none;
  border-width: 1px;
  border-radius: 0;
  transition: 125ms;
}

.buttons button:hover {
  filter: brightness(0.85);
}

.buttons button + button {
  margin-left: 15px;
}
</style>
