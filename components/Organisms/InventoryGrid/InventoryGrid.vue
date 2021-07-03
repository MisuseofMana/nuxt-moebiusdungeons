<template>
    <v-row no-gutters class="inventoryGrid">
        <v-col cols="4" v-for="(items, index) in inventory" :key="items.item + index">
            <v-card >
                {{items.item}}
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        name: 'InventoryGrid',
        props: {
            inventory: {
                type: Array,
                default: () => 
                    [
                        {item: 'Doll'}, {item: 'Ring'}, {item: 'Gem'},
                        {item: 'Potion'}, {item: 'Bone'}, {item: 'Charm'},
                        {item: ''}, {item: ''}, {item: ''},
                    ]
            } 
        }
    }
</script>

<style scoped>
    .inventoryGrid {
        width:200px;
        height:200px;
    }
</style>