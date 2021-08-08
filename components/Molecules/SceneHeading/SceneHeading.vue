<template>
    <div class="d-flex align-center">
        <SigilImage 
            :src="imageSource"
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
		type: String,
		phase: {
			default: 'Dungeon Phase'
		},
	},
	data() {
		return {
			imageLookup: {
				'Shop Phase': 'shopkeep',
				'Dungeon Phase': 'monster',
				'Shop Select Phase': 'shopkeep',
				'Travel Phase': 'traveler'
			}
		}
	},
	computed: {
		...mapState('gameData', [
			'location'
		]),
		imageSource() {
			return this.imageLookup[this.phase]
		},
		title() {
			if(this.phase === 'Dungeon Phase') {
				return this.location
			}
			return this.imageSource
		}
	}
}
</script>