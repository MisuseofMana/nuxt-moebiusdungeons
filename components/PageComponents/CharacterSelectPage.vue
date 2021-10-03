<template>
    <v-container>
		<v-row align="center" justify="center">
			<SceneHeading phase="Character Select" icon="traveler"/>
		</v-row>
		<v-row align="center" justify="center">
			<v-col cols="12" class="d-flex justify-center" >
				<CharacterImage who="swordsman" @click.native="selectCharacter('swordsman')" class="mr-4"/>
				<CharacterImage who="mage" class="mr-4" @click.native="selectCharacter('mage')"/>
				<CharacterImage who="varlet" @click.native="selectCharacter('varlet')"/>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
	name: 'CharacterSelectPage',
	methods: {
		...mapMutations('gameData', [
			'CHANGE_PHASE',
		]),
		selectCharacter(who) {
			//change character in store
			console.log(who)
			this.CHANGE_PHASE('MapPage')
		}
	}
}
</script>
