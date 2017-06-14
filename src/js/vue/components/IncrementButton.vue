<template>
  <button :class="$style.test" @click.prevent="increment">+1</button>
</template>

<script>
import store from '../store';  // 利用するコンポーネントで読み込む


export default {
  methods: {
    increment () {
      store.commit('INCREMENT')  // `store.state.counter` を直接操作しない
    }
  }
}
</script>

<style scoped>
.test { font-size: 30px; transform: translate(0%,50%); }
</style>


<style module>
.test { font-size: 30px; transform: translate(0%,50%); }
</style>
