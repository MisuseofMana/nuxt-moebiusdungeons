<template>
    <v-row class="inventoryGrid">
        <v-col cols="4" class="pa-0 mb-1" v-for="(items, index) in inventory" :key="items.item + index">
            <v-card :hover="items.item !== null" :disabled="items.item == null" :flat="items.item !== null" :color="items.item ? 'white': 'black' " min-width="68" min-height="68" max-height="68" max-width="68" class="pa-0 d-flex text-center justify-center align-center">
                <v-img :src="items.item" />
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
import clericItems from '@/mocks/items/clericItems.mock.js'

    export default {
        name: 'InventoryGrid',
        props: {
            inventory: {
                type: Array,
                default: () => 
                    [
                        {item: clericItems[0].icon}, {item: clericItems[1].icon}, {item: null},
                        {item: null}, {item: null}, {item: null},
                        {item: null}, {item: null}, {item: null},
                    ]
            } 
        },
    }
</script>

<style scoped>
    .inventoryGrid {
        width:210px;
        height:200px;
    }
</style>