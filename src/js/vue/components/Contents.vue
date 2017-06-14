<template>
	<div>
		<p>コンテンツ</p>
		<button @click.prevent="test">test</button>
		<p>{{ text }}</p>
	</div>
</template>

<script>
import store from '../store';

export default {
	mounted: () => {
		console.log('ok');
	},
	computed: {
		text () {
			return store.state.text
		}
	},
	methods: {
		test () {
			store.dispatch('BBB', 'クリックされました。');
			// store.commit('CLICK','クリックされました。');
		}
	}
}
</script>