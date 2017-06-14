<template>
  <div id="app">
    <CommonHeader></CommonHeader>
    <Contents></Contents>
  </div>
</template>

<script>

import CommonHeader from './Header.vue'
import Contents from './Contents.vue'
export default {
	components: {
		Contents,
		CommonHeader
	}
}
</script>

