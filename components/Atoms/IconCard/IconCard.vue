<template>
    <div>
        <v-card color="white" width="60" height="60" class="size d-flex flex-column align-center justify-center" >
            <v-img 
                :src="require(`@/assets/images/ui/${icon}.png`)"
                height="60"
                width="60"
                max-height="60"
                max-width="60"
            >
            </v-img>
                <v-overlay :opacity="opacity" :color="color" :absolute="true" :value="true" class="text-h6 text-center">
                    <v-img class="red-shadow" 
                        v-if="!tradeWorks"
                        :src="require(`@/assets/images/ui/redX.png`)"
                        height="50"
                        width="50"
                        max-height="50"
                        max-width="50">
                    </v-img>
                    <v-overlay :opacity="0" :color="color" :absolute="true" :value="true">
                        <div class="black-shadow white--text">
                            {{ value }}
                        </div>
                    </v-overlay>
                </v-overlay>
        </v-card>
    </div>
</template>

<script>
export default {
	name: 'IconCard',
	props: {
		icon: {
			type:String,
			default: 'physicalAttack'
		},
		value: {
			type:Number,
			default: 0
		},
		tradeWorks: {
			type: Boolean,
			default: true
		},
		color: {
			type: String,
			default: ''
		}
	},
	computed: {
		opacity() {
			if(this.color === ''){
				return 0
			}
			else return 0
		}
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

.blue-shadow {
    text-shadow:blue -1px 1px 5px;
}
</style>