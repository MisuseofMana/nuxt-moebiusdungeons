<template>
<div>
	<div class="my-2">PHASE</div>
	<v-btn @click="changePhase('DashboardPage')">Dashboard Page</v-btn>
	<v-btn @click="changePhase('CharacterSelectPage')">Character Select Page</v-btn>
	<v-btn @click="changePhase('MapPage')">Map Page</v-btn>
	<v-btn @click="changePhase('DungeonPage')">Dungeon Page</v-btn>
	<v-btn @click="changePhase('ShopPage')">Shop Page</v-btn>
	<v-btn @click="changePhase('LeaderBoardPage')">Leader Board Page</v-btn>
</div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
	name:'DebugBar',
	methods: {
		...mapMutations('gameData', [
			'CHANGE_PHASE',
		]),
		changePhase(newPhase){
			this.CHANGE_PHASE(newPhase)
		}
	},
}
</script>