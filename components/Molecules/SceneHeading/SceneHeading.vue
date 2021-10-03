<template>
    <div class="d-flex align-center">
        <SigilImage 
            :src="icon"
            :width="75"
            :height="75"
            class="mr-2"
        />
        <div class="text-h2">{{ title }}</div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	name: 'SceneHeading',
	props: {
		phase: {
			type: String,
			default: 'Dungeon Phase'
		},
		icon: {
			type: String,
			default: 'shopkeep'
		}
	},
	computed: {
		...mapState('gameData', [
			'location'
		]),
		title() {
			if(this.phase === 'Dungeon Phase') {
				return this.location
			}
			return this.phase
		}
	}
}
</script>