<template>
    <div class="d-flex justify-center align-center mb-2">
        <IconCard :icon="incomingDamageType + 'Attack'" color="red" :value="incomingDamage" :tradeWorks="canAttack"/>
    
        <div class="black--text text-h4 mx-2 red-shadow">
            -
        </div>

        <IconCard :icon="defendersArmorType + 'Armor'" color="blue" :value="defendersArmor" :tradeWorks="canDefend"/>

        <div class="black--text text-h4 mx-2 red-shadow">
            =
        </div>

        <IconCard :icon="incomingDamageType + 'Attack'" color="red" :value="totalDamage" :tradeWorks="canAttack"/>
    </div>
</template>

<script>
export default {
	name: 'DamageReadout',
	data() {
		return {
			combatResult: 'red'
		}
	},
	props: {
		incomingDamage: {
			type: Number,
			default: 5,
		},
		incomingDamageType: {
			type:String,
			default: 'physical'
		},
		defendersArmor: {
			type: Number,
			default: 2,
		},
		defendersArmorType: {
			type: String,
			default: 'physical', 
		},
	},
	computed: {
		totalDamage() {
			let totalDamage
                
			// if attack can be blocked
			if(this.incomingDamageType === this.defendersArmorType) {
				totalDamage = this.incomingDamage - this.defendersArmor
				// if above expression returns 0 or neg
				if (totalDamage <= 0) {
					// reset above negative for corner cases
					return totalDamage = 0
				}
				return totalDamage
			}

			// if attack cant be blocked just return damage
			return this.incomingDamage
		},

		canAttack() {
			if (this.incomingDamageType === this.defendersArmorType && this.totalDamage > 0) return true
			else if (this.incomingDamageType !== this.defendersArmorType) return true
			return false
		},
		canDefend() {
			if(this.incomingDamageType === this.defendersArmorType && this.defendersArmor !== 0) return true
			else if (this.incomingDamage === this.totalDamage) return false
			return false
		}, 
	}
}
</script>

<style lang="scss" scoped>
.black-shadow {
    text-shadow:black 0px 0px 10px;
}

.red-shadow {
    text-shadow:red -1px 1px 5px;
}
</style>