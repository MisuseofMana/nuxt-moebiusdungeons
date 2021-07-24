<template>
	<GameHelper tip="Character Select Help">
		<v-container>
			<v-row align="center">
				<v-spacer></v-spacer>
				<v-col cols="8" align-self="center" class="d-flex flex-column justify-center align-center">
						<h1 class="text-h6">
							WELL MET.
						</h1>
							<p class="text-body-1">
								Welcome to the Moebius Dungeons.
							</p>
						<div>
							<v-img max-width="250" :src="require('@/assets/images/flavor/items.png')" alt=""/>
						</div>
					
				</v-col>
				<v-spacer></v-spacer>


			</v-row>
			<v-row align="center">
							<v-spacer></v-spacer>
				<v-col cols="8" align-self="center" class="text-left">
							<p class="text-body-1">
								This is a high fantasy, hack and slash, web game adventure. The goal is to slay monsters in the name of the grand capitol city, the glimmering walled citadel, <span class="purple--text lighten-2">"EYIEN"</span>.
								You are in the employ of the king of Eyien, and call yourself one of the kingloyal of the coterie. You will journey outward from Eyien, taming the wilds of this realm of  <span class="purple--text lighten-2">AMARA</span>.
								The kingdom will give you coins for each monster you slay. Use this wealth to buy equipment and trinkets to bolster your strength.
							</p>

							<p>
								Tougher beasts drop more coins and some even hold relics of the realm. Play as a  <span class="purple--text lighten-2">Swordsman</span>, a  <span class="purple--text lighten-2">Mage</span>, or a  <span class="purple--text lighten-2">Varlet</span>. Each character class is different, so try them all out. Rinse then repeat. How long can you survive?
							</p>
							<p>
								Perhaps you will become renown in the eyes of the kingloyal. Make a name for yourself.
							</p>
							<p><span class="purple--text lighten-2">Do not falter.</span></p>

				</v-col>
							<v-spacer></v-spacer>
			</v-row>
		</v-container>
	</GameHelper>
</template>

<script>
export default {
	name: 'CharacterSelectHelper'
}
</script>
