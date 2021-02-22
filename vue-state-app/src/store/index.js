import { reactive } from 'vue'

const state = reactive({
  counter: 0
})

const methods = {
  decrease() {
    if (state.counter > 0) {
      state.counter -= 1
    }
  },
  increase() {
    state.counter += 1
  }
}

export default {
  state,
  methods
}
