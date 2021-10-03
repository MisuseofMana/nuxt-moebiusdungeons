<template>
<v-container>
    <v-row align="center" class="fullWidth">
        <v-col cols="12" class="mr-0 d-flex align-center">
            <IconCard />
            <v-progress-linear :color="barColor" :value="contest"/>
            <IconCard />
        </v-col>
    </v-row>
</v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
	name: 'ContestBar',
	props: {
		text: {
			type: String,
			default: 'Default',
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		color: {
			type: String,
			default: 'primary'
		},
		playerStat:{
			type: Number,
			default: 10,
		},
		monsterStat: {
			type: Number,
			default: 1500,
		},
		playerIcon: {
			type: String,
			default:'Attack'
		},
		monsterIcon: {
			type:String,
			default: 'Armor'
		},
	},
	computed: {
		...mapState('playerData', {
			playerAttackType: state => state.attackType,
			playerArmorType: state => state.armorType
		}),
		...mapState('monsterData', {
			monsterAttackType: state => state.attackType,
			monsterArmorType: state => state.armorType
		}),
		contest() {
			if(this.playerStat > this.monsterStat) {
				return ((this.monsterStat / this.playerStat) * 100) % 100
			}
			else if (this.monsterStat > this.playerStat) {
				return ((this.playerStat / this.monsterStat) * 100) % 100
			}
			else if (this.monsterStat === this.playerStat) {
				return 0
			}
			return 0
		},
		barColor() {
			if (this.contest > 50) return 'green'
			else if (this.contest < 50) return 'red'
			return 'green'
		},
	}
}
</script>

<style scoped>
.fullWidth {
	width:100%;
}
</style>