<template>
    <v-row>
        <v-col cols=1>
            <v-card>
                <v-img src=""></v-img>
            </v-card>
        </v-col>
        <v-col cols="10">
            <v-progress-linear value="15"/>

        </v-col>
        <v-col cols=1>
            
        </v-col>
    </v-row>
</template>

<script>
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
                default: 5,
            },
            contest: {
                type: String,
                default: 'damage'
            }
        },
        computed: {
            barLength() {
               const contest = this.monsterStat / this.playerStat // .5
               const ofHundred = 100 / .5 // 200
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>