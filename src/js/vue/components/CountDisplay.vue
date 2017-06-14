<template>
  <span>{{ counter }}</span>
</template>

<script>
import store from '../store/index'  // 利用するコンポーネントで読み込む

export default {
  computed: {
    counter () {
      return store.state.counter
    }
  }
}
</script>