<template>
    <v-img 
    v-bind="$attrs"
    :src="require(`@/assets/images/locations/${src}.png`)"
	:max-width="width"
	:min-width="width"
	:max-height="height"
	:min-height="height"
    />
</template>

<script>
export default {
	name:'MapIcon',
	data() {
		return {
			imageDimensions: {
				roads: {
					width:393,
					height:357,
				},
				caves: {
					width:503,
					height:383,
				},
				forest: {
					width:351,
					height:376,
				},
				hills: {
					width:372,
					height:361,
				},
				ruins: {
					width:342,
					height:359,
				},
				tower: {
					width:168,
					height:410,
				},
				eyien: {
					width:168,
					height:305,
				}
			}
		}
	},
	props: {
		src:{
			type: String,
			default:'roads',
		},
	},
	computed: {
		width() {
			return this.imageDimensions[this.src].width / 3
		},
		height() {
			return this.imageDimensions[this.src].height / 3
		},
	}
}
</script>