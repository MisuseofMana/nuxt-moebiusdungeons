<template>
  <div class="position-relative">
    <WorldMap class="position-absolute"/>
    <MapIcon class="position-absolute" v-for="(location) in locations" :style="offsets[location]" :key="location" :src="location"/>
  </div>
</template>

<script>
export default {
	name:'InteractiveMap',
	data() {
		return {
			locations: [
				'roads',
				'caves',
				'forest',
				'hills',
				'ruins',
				'tower',
				'eyien',
			],
			offsets: {
				roads: {
					top:'475px',
					left:'613px',
				},
				caves: {
					top:'585px',
					left:'220px',
				},
				forest: {
					top:'220px',
					left:'830px',
				},
				hills: {
					top:'200px',
					left:'410px',
				},
				ruins: {
					top:'100px',
					left:'1150px',
				},
				tower: {
					top:'120px',
					left:'120px',
				},
				eyien: {
					top:'700px',
					left:'1030px',
				}
			}
		}
	},
}
</script>

<style lang="scss" scoped>
.position-relative {
  position:relative;
}

.position-absolute {
  position:absolute;
}
</style>