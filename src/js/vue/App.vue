<template>
  <div id="app">
    <GlobalHeader></GlobalHeader>
    <Contents></Contents>
		<GlobalFotter></GlobalFotter>
  </div>
</template>

<script>

import GlobalHeader from './components/global/header/Header.vue'
import GlobalFotter from './components/global/footer/Footer.vue'
import Contents from './components/contents/Contents.vue'

export default {
	components: {
		Contents,
		GlobalHeader,
		GlobalFotter
	}
}
</script>
<style src="./base.css"></style>

