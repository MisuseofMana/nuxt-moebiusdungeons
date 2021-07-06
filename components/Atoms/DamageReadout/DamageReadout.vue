<template>
    <div class="d-flex justify-center align-center mb-2">
        <v-card class="size d-flex flex-column align-center justify-center" >
            <v-img 
                :src="require(`@/assets/images/ui/${incomingDamageType}Attack.png`)"
                height="60"
                width="60"
                max-height="60"
                max-width="60"
            >
            </v-img>
                <v-overlay color="red" opacity=".4" :absolute="true" :value="true" class="text-h6 text-center">
                    <div class="red-shadow white--text">
                        {{ incomingDamage }}
                    </div>
                </v-overlay>
        </v-card>

        <div class="black--text text-h4 mx-2 red-shadow">
            -
        </div>

        <v-card class=" shadow size d-flex flex-column align-center justify-center" >
            <v-img 
                :src="require(`@/assets/images/ui/${defendersArmorType}Armor.png`)"
                height="60"
                width="60"
                max-height="60"
                max-width="60"
            >
            </v-img>
                <v-overlay color="blue" opacity=".4" :absolute="true" :value="true" class="text-h6 text-center">
                    <div class="shadow" v-if="canDefend">
                        {{ defendersArmor }}
                    </div>
                    <v-img class="shadow" 
                        v-else
                        :src="require(`@/assets/images/ui/redX.png`)"
                        height="50"
                        width="50"
                        max-height="50"
                        max-width="50">
                    </v-img>
                </v-overlay>
        </v-card>

        <div class="black--text text-h4 mx-2 red-shadow">
            =
        </div>

        <v-card class="size d-flex flex-column align-center justify-center" >
            <v-img 
                :src="require(`@/assets/images/ui/${incomingDamageType}Attack.png`)"
                height="60"
                width="60"
                max-height="60"
                max-width="60"
            >
            </v-img>
                <v-overlay :color="combatResult" opacity=".4" :absolute="true" :value="true" class="white--text text-h6 text-center text-uppercase">
                    <div class="shadow">
                        {{ totalDamage }}
                    </div>
                </v-overlay>
        </v-card>
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
                default: 0,
            },
            incomingDamageType: {
                type:String,
                default: 'physical'
            },
            defendersArmor: {
                type: Number,
                default: 0,
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
                        this.combatResult = 'blue'
                        // reset above negative for corner cases
                        return totalDamage = 0
                    }
                    
                    this.combatResult = 'red'
                    return totalDamage
                }

                // if attack cant be blocked just return damage
                return this.incomingDamage
            },
            canDefend() {
                if(this.incomingDamageType === this.defendersArmorType) return true
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