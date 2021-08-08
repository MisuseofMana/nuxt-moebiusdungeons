<template>
    <v-container>
        <v-row no-gutters align="center" class="mb-4">
            <v-col cols="12" class="d-flex justify-center">
                <SceneHeading phase="Shop Phase"/>
            </v-col>
        </v-row>
        
        <span v-if="selectingShop" key="shopSelect">
            <v-row no-gutters align="center" class="mb-4">
                <v-col cols="12" class="d-flex justify-center">
                    Choose a shopkeeper to visit.
                </v-col>
            </v-row>
			<v-row no-gutters justify="center">
				<v-col cols="12" align-self="center" justify-self="center" class="d-flex justify-center align-center">
                    <div @click="selectShopKeeper(randomShopKeepers[0])">
                        <CharacterImage :who="characters[randomShopKeepers[0]]" class="cursorPointer mr-5"/>
                    </div>
                    <div @click="selectShopKeeper(randomShopKeepers[1])">
						<CharacterImage :who="characters[randomShopKeepers[1]]" class="cursorPointer mr-5"/>
                    </div>
                    <div @click="selectShopKeeper(randomShopKeepers[2])">
						<CharacterImage :who="characters[randomShopKeepers[2]]" class="cursorPointer"/>
                    </div>
				</v-col>
			</v-row>
        </span>

        <span v-if="!selectingShop" key="shopActive">
            <v-row>
				<v-spacer></v-spacer>
					<v-col cols="7" class="d-flex flex-row align-center">
						<CharacterImage :who="characters[playerClass]" class="cursorPointer mr-2"/>
						<ShopPopulation class="mr-2"/>
						<CharacterImage :who="characters[chosenShop]" class="cursorPointer"/>
					</v-col>
				<v-spacer></v-spacer>
            </v-row>
        </span>
    </v-container>
</template>

<script>
import { mapState } from 'vuex'
import characters from '@/components/Molecules/CharacterImage/CharacterImage.mock.js'

export default {
	name:'ShopPage',
	data() {
		return {
			randomShopKeepers: [
				'witch',
				'merchant',
				'graverobber',
				'cleric',
				'scribe'
			],
			selectingShop: true,
			chosenShop: '',
			characters
		}
	},
	methods: {
		shuffle(array) {
			var currentIndex = array.length,  randomIndex

			// While there remain elements to shuffle...
			while (0 !== currentIndex) {

				// Pick a remaining element...
				randomIndex = Math.floor(Math.random() * currentIndex)
				currentIndex--;

				// And swap it with the current element.
				[array[currentIndex], array[randomIndex]] = [
					array[randomIndex], array[currentIndex]]
			}
			return array
		},
		selectShopKeeper(who) {
			this.chosenShop = who
			this.selectingShop = false
		}
	},
	computed: {
		...mapState('playerData', {
			playerClass: state => state.player.class
		})
	},
	mounted() {
		this.shuffle(this.randomShopKeepers)
	},
}
</script>

<style scoped>
.cursorPointer {
    cursor: pointer;
}
</style>