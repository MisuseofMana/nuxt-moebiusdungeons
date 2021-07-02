<template>
    <div class="d-flex align-center">
        <v-img 
            v-bind="$attrs"
            :src="require(`@/assets/images/sigils/${imageSource}.png`)"
            max-height="75"
            max-width="75"
            class="mr-2"
        />
        <div class="text-h2">{{ phase }}</div>
    </div>
</template>

<script>
    export default {
        name: 'SceneHeading',
        props: {
            type: String,
            phase: {
                default: 'Dungeon Phase'
            }
        },
        data() {
            return {
                imageLookup: {
                    'Shop Phase': 'shopkeep',
                    "Dungeon Phase": 'monster',
                    "Shop Select Phase": 'shopkeep',
                    "Travel Phase": 'traveler'
                }
            }
        },
        computed: {
            imageSource() {
                return this.imageLookup[this.phase]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>