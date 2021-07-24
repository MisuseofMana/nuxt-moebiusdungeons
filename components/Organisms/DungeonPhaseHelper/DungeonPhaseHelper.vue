<template>
	<GameHelper tip="Dungeon Help">
		<v-container>
			<v-row>"
				<v-col cols="4">
					<div class="text-left">
						<h5 class="text-h5 mb-5">Stats</h5>
					</div>
					<div class="d-flex justify-center align-center mb-5">
					<IconCard :value="null" :color="null" :icon="player.attackType + 'Attack'"/>
					<p class="text-subtitle-2 pa-2 mb-0">{{player.attackDescription}}</p>
					</div>
					<div class="d-flex justify-center align-center mb-5">
					<IconCard :value="null" :color="null" :icon="player.attackType + 'Armor'"/>
					<p class="text-subtitle-2 pa-2 mb-0">{{player.armorDescription}}</p>
					</div>
					<div class="d-flex justify-center align-center">
					<IconCard :value="null" :color="null" icon="health"/>
					<p class="text-subtitle-2 pa-2 mb-0">
						Health is represented by this heart icon. If your health reaches 0, it's game over! (abbreviated HP)
					</p>
					</div>

				</v-col>

				<v-col cols="8" color="black">
						<div class="text-left">
							<h5 class="text-h5 mb-5">
								Abilities
							</h5>
							<p class="text-body-1 mt-5">
								Trade Blows
							</p>
							<p class="text-body-2">
								<span class="purple--text lighten-2">"Trade Blows"</span> is the standard attack in Moebius Dungeons.
								Clicking this will deal damage based on your ATK value. If your attack doesn't kill the monster, it attacks you back so watch out!
							</p>
							<v-divider class="mb-3" color="grey"></v-divider>
							<p class="text-body-1">
								{{ player.special}}
							</p>
							<p class="text-body-2">
								{{ player.specialDescription}}
							</p>
							<v-divider class="mb-3" color="grey"></v-divider>
							<p class="text-body-1">
								Turn Tail
							</p>
							<p class="text-body-2">
								<span class="purple--text lighten-2">Flee you fool! Live another day!</span> You may try this once per fight.
								This ability requires a bit of luck. Some monsters are faster than others and are harder to run from.
								I won't explain this ability too much, it's best to try it out and see the results. As a general rule if you're low on health, or up against a terrifying monster it's best to <span class="purple--text lighten-2">turn tail</span>.
							</p>
						</div>
				</v-col>
			</v-row>
		</v-container>
	</GameHelper>
</template>

<script>
import {mapState} from 'vuex'

export default {
	name: 'DungeonPhaseHelper',
	computed: {
		...mapState('playerData', [
			'player'
		])
	}
}
</script>
