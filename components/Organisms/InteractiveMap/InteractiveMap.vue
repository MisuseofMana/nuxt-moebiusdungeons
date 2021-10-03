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
					top:'480px',
					left:'605px',
				},
				caves: {
					top:'570px',
					left:'190px',
				},
				forest: {
					top:'190px',
					left:'810px',
				},
				hills: {
					top:'170px',
					left:'410px',
				},
				ruins: {
					top:'60px',
					left:'1140px',
				},
				tower: {
					top:'100px',
					left:'100px',
				},
				eyien: {
					top:'690px',
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