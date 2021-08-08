<template>
    <v-card hover class="pa-1 d-flex align-center justify-center">
        <v-img 
        :src="require(`@/assets/images/items/${item.iconPath}`)"
        max-width="70"
        max-height="70"
        class="mr-4"
        />
        <div class="d-flex flex-column text-cente mr-4">
            <div class="text-h6"> {{ item.name }} </div>
            <div class="text-subtitle">{{ item.description }}</div>
        </div>
        <Coin :wealth="item.cost"/>
    </v-card>
</template>

<script>
import clericItems from '@/mocks/items/clericItems.mock.js'

export default {
	name: 'ShopItemBar',
	data() {
		return {
			items: {
				...clericItems,
			}
		}
	},
	props: {
		shopkeep: {
			type: String,
			default: 'cleric'
		},
		item: {
			type: Object,
			default: () => clericItems['minorHeal']
		}
	},
}
</script>