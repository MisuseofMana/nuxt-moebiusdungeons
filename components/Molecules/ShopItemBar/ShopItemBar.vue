<template>
    <v-card hover class="d-flex align-center justify-center">
        <v-img 
        :src="items.icon"
        contain
        height="60"
        width="60"
        max-width="60"
        max-height="60"
        class="mr-4"
        />
        <div class="d-flex flex-column text-cente mr-4">
            <div class="text-h6"> {{ items.name }} </div>
            <div class="text-subtitle">{{ items.description }}</div>
        </div>
        <Coin :wealth="items.cost"/>
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