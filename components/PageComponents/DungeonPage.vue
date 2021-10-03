<template>
    <v-container>
			<v-row no-gutters align="center" class="mb-4">
				<v-col cols="12" class="d-flex justify-center">
					<SceneHeading phase="Dungeon Phase" icon="monster"/>
				</v-col>
			</v-row>
			<v-row no-gutters justify="center">
				<v-col cols="1" justify-self="center" class="d-flex justify-center">
					Player Log
				</v-col>
				<v-col cols="3" align-self="center" justify-self="center" class="d-flex flex-column justify-center align-center">
					<div class="text-h6 mb-2">{{ playerClass }}</div>
					<CharacterImage :who="characters[playerClass]" class="mb-6"/>
					<InventoryGrid/>
				</v-col>
				<v-col cols="3" justify-self="center" class="d-flex flex-column justify-center mt-8">
					<ContestBar />
					<ContestBar />
					<ContestBar class="mb-3"/>
					<Button class="mb-2" text="Trade Blows"/>
					<Button class="mb-2" :text="special"/>
					<Button class="mb-2" text="Turn Tail"/>
				</v-col>
				<v-col cols="3" align-self="center" justify-self="center" class="d-flex flex-column justify-center align-center">
					<div class="text-h6 mb-2">{{ monsterClass }}</div>
					<CharacterImage :who="characters[monsterClass]" class="mb-5"/>
					<InventoryGrid/>
				</v-col>
				<v-col cols="1" justify-self="center" class="d-flex justify-center">
					Monster Log
				</v-col>
			</v-row>
			<v-row no-gutters align="center" class="text-left">
				<v-col cols="6">
					
				</v-col>
			</v-row>
		</v-container>
</template>

<script>
import { mapState } from 'vuex'
import characters from '@/components/Molecules/CharacterImage/CharacterImage.mock.js'

export default {
	name: 'DungeonPage',
	data() {
		return {
			characters,
		}
	},
	computed: {
		...mapState('playerData', {
			playerClass: state => state.player.class,
			special: state => state.player.special,
		}),
		...mapState('monsterData', {
			monsterClass: state => state.monster.class,
		})
	}
}
</script>
