<template>
<v-container>
    <v-row class="inventoryGrid">
        <v-col cols="4" class="pa-0 mb-1 d-flex align-center justify-center" v-for="(items, index) in inventory" :key="items.icon + index">
            <v-hover>
                <template v-slot:default="{ hover }">
                    <v-card :elevation="hover ? 24 : 6" :hover="items.item !== null " :disabled="items.item === null" :flat="items.item === null" color="white" min-width="68" min-height="68" max-height="68" max-width="68" class="pa-0 d-flex text-center justify-center align-center">
                        <v-img max-width="60" min-width="60" max-height="60" min-height="60" v-if="items.icon !== null" :src="require(`@/assets/images/items/${items.icon}`)" />
                    </v-card>
                </template>
            </v-hover>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
import clericItems from '@/mocks/items/clericItems.mock.js'
import graverobberItems from '@/mocks/items/graverobberItems.mock.js'
import merchantItems from '@/mocks/items/merchantItems.mock.js'
import witchItems from '@/mocks/items/witchItems.mock.js'

export default {
	name: 'InventoryGrid',
	props: {
		inventory: {
			type: Array,
			default: () => 
				[
					{icon: clericItems.minorHeal.iconPath}, {icon: clericItems.fortune.iconPath}, {icon: witchItems.ochreElixer.iconPath},
					{icon: graverobberItems.detrimentBangle.iconPath}, {icon: merchantItems.etchingRod.iconPath}, {icon: merchantItems.armorKit.iconPath},
					{icon: witchItems.ancientRune.iconPath}, {icon: graverobberItems.dessicatedDoll.iconPath}, {icon: clericItems.greaterHeal.iconPath},
				]
		} 
	},
}
</script>

<style scoped>
    .inventoryGrid {
        width:230px;
        height:230px;
    }
</style>