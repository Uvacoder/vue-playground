<template>
  <div class="flex justify-between">
    <h1 class="text-4xl font-black text-gray-800">Entre na sua conta</h1>
    <button class="text-4xl text-gray-600 focus:outline-none" @click="close">
      &times;
    </button>
  </div>
</template>

<script>
// import { reactive } from 'vue'
import useModal from '../../hooks/useModal'

export default {
  name: 'modalCreateAccount',
  setup() {
    const modal = useModal()

    return {
      close: modal.close
    }
  }
}
</script>
