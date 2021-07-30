<template>
    <v-img 
    v-bind="$attrs"
    :src="require(`@/assets/images/locations/world-map.png`)"
	:max-width="width"
	:min-width="width"
	:max-height="height"
	:min-height="height"
    />
</template>

<script>
export default {
	name:'WorldMap',
	data() {
		return {
			width: 5400 / 4,
			height: 3300 / 4,
		}
	},
}
</script>