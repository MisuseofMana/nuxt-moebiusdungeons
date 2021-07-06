<template>
    <v-card hover class="d-flex align-center justify-center">
        <Coin :wealth="items.cost" class="mr-4"/>
        <div class="d-flex flex-column text-cente mr-4">
            <div class="text-h6"> {{ items.name }} </div>
            <div class="text-subtitle">{{ items.description }}</div>
        </div>
        <v-img 
        :src="items.icon"
        contain
        height="60"
        width="60"
        max-width="60"
        max-height="60"
        />
    </v-card>
</template>

<script>
import clericItems from '@/mocks/items/clericItems.mock.js'

    export default {
        name: 'ShopItemBar',
        props: {
            shopkeep: {
                type: String,
                default: 'cleric'
            },
            items: {
                type: Object,
                default: () => clericItems['minorHeal']
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>