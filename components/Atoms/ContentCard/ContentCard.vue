<template>
    <v-sheet elevation="2" class="d-flex flex-column align-center justify-center" :class="hoverable ? 'hoverable' : ''">
        <slot>Some Content</slot>
    </v-sheet>
</template>

<script>
export default {
	name: 'ContentCard',
	props: {
		hoverable: {
			type: Boolean,
			default: false,
		}
	},
	computed: {
		opacity() {
			if(this.color === ''){
				return 0
			}
			else return 0
		}
	},
	data() {
		return {
			cardColor: 'amber'
		}
	},
}
</script>

<style scoped>
.hoverable:hover {
	background:gold;
	cursor:pointer;
}
</style>