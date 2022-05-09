<template>
  <v-row>
    <v-col>
      <ShopItemBar v-for="items in "/>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from 'vuex' 

export default {
	name:'ShopPopulation',
	props: {
		shopInventory: {
			type: Object,
			default: () => {}
		}
	},
	mounted: {
    
	},
	computed: {
		...mapState('shopkeepData', )
	}
}
</script>