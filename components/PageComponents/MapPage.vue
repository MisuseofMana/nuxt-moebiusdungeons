<template>
<div>
    <v-row>
        <v-col cols="12">
            <SceneHeading phase="Travel" icon="traveler"/>
            <InteractiveMap/>
        </v-col>
    </v-row>
</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default{
	name: 'Dashboard',
	computed: {
		...mapState('saveData', [
			'savedGame',
		]),
	},
	methods: {
		...mapMutations('gameData', [
			'CHANGE_PHASE',
		]),
		changePhase(newPhase){
			console.log('hello')
			this.CHANGE_PHASE(newPhase)
		}
	}
} 
</script>
