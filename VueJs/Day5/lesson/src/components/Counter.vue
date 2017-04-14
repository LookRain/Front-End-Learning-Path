<template>
	<div>
		<h2>
			The Count: {{ count }}
		</h2>

		<p>
			<button @click="count += 1">Increment</button>
		</p>
	</div>	
</template>

<script>
	export default {
		data() {
			return { count: 0 };
		}
	}
</script>

<style>
	

</style>
