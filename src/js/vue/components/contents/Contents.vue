<template>
	<div>
		<p>コンテンツ</p>
		<button name="btn" @click.prevent="click(this.event)">クリックしてください。</button>
		<p>{{ text }}</p>
		<p>{{ test }}</p>
	</div>
</template>
<script src="./index.js"></script>
<style src="./style.css" module></style>