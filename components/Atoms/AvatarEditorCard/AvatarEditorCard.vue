<template>
    <v-card class="ma-2 pa-2">
        <div class="d-flex justify-space-between align-center">
            <v-btn @click="decrement()"><v-icon>mdi-minus</v-icon></v-btn>
            <span class="tiny text-uppercase mx-2">
                {{ editType.replace('-', ' ') }}: 
                <span v-if="selected > -1">
                    {{selected + 1}}
                </span>
                <span v-if="selected < 0">
                    NONE
                </span>
            </span>
            <v-btn @click="increment()"><v-icon>mdi-plus</v-icon></v-btn>
        </div>
    </v-card>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex'

    export default {
        name: 'AvatarEditorCard',
        props: {
            editType: {
                type: String,
                default: 'body'
            },
            index: {
                type: Number,
                default: 0
            },
        },
        computed: {
            ...mapState('avatarCanvas', {
                characterOptions: state => state.characterJSON
            }),
            selected() {
                return this.characterOptions[this.index].which
            }
        },
        methods: {
            ...mapMutations('avatarCanvas', [
                'INCREMENT_CHARACTER_OPTIONS',
                'DECREMENT_CHARACTER_OPTIONS',
            ]),
            ...mapActions('avatarCanvas', [
                'characterOptionUp',
                'characterOptionDown',
            ]),
            decrement() {
                this.characterOptionDown(this.index)
            },
            increment() {
                this.characterOptionUp(this.index)

            }
        }
    }
</script>

<style scoped>
.widthSet {
    width:200px;
}
</style>