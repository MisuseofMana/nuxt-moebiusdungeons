<template>
<div class="d-flex">
    <v-card class="size d-flex flex-column align-center justify-center" >
        <v-img 
            :src="require(`@/assets/images/ui/healthicon.png`)"
            height="70"
            width="70"
            max-height="70"
            max-width="70"
        >
        </v-img>
        <v-overlay opacity="0" :absolute="true" :value="true" class="text-h6 text-center">
            <div class="black-shadow white--text">
                {{attack}}
            </div>
        </v-overlay>
    </v-card>

    <v-card class="size d-flex flex-column align-center justify-center" >
        <v-img 
            :src="require(`@/assets/images/ui/${attackType}Attack.png`)"
             height="70"
            width="70"
            max-height="70"
            max-width="70"
        >
        </v-img>
        <v-overlay opacity="0" :absolute="true" :value="true" class="text-h6 text-center">
            <div class="black-shadow white--text">
                {{attack}}
            </div>
        </v-overlay>
    </v-card>
    
    <v-card class="size d-flex flex-column align-center justify-center" >
        <v-img 
            :src="require(`@/assets/images/ui/${armorType}Armor.png`)"
             height="70"
            width="70"
            max-height="70"
            max-width="70"
        >
        </v-img>
        <v-overlay opacity="0" :absolute="true" :value="true" class="text-h6 text-center">
            <div class="black-shadow white--text">
                {{attack}}
            </div>
        </v-overlay>
    </v-card>
    
    <v-card class="size d-flex flex-column align-center justify-center" >
        <v-img 
            :src="require(`@/assets/images/ui/coin.png`)"
             height="55"
            width="55"
            max-height="55"
            max-width="55"
        >
        </v-img>
        <v-overlay opacity="0" :absolute="true" :value="true" class="text-h6 text-center">
            <div class="black-shadow white--text">
                {{attack}}
            </div>
        </v-overlay>
    </v-card>
</div>
</template>

<script>
    export default {
        name:'StatBlock',
        props: {
            attackType: {
                type: String,
                default: 'physical'
            },
            armorType: {
                type: String,
                default: 'physical'
            },
            attack: {
                type: Number,
                default: 0,
            },
            armor: {
                type: Number,
                default: 0,
            },
            health: {
                type: Number,
                default: 0,
            },
            coins: {
                type: Number,
                default: 0,
            },

        }
    }
</script>

<style scoped>
.size {
    width:75px;
    height:75px;
    margin-right:5px;
}

.black-shadow {
    text-shadow:black 0px 0px 10px;
}
</style>