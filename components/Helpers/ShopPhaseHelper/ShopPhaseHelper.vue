<template>
	<GameHelper tip="Shop Select Help">
		<v-container>
			<v-row>
				<v-spacer></v-spacer>
				<v-col cols="9">
					<div class="text-left">
						<h5 class="text-h5">Shop Helper</h5>
							<p class="text-body-1">
								There are four types of shopkeepers in Moebius Dungeons, each has their own unique rotating stock.
							</p>
							<h5 class="text-h5">
								{{visiting}}
							</h5>
							<p class="text-body-1">
								{{shopkeeps[visiting].description}}
							</p>
							<h5 class="text-h5">
								Advice
							</h5>
							<p class="text-body-1">
								Each shopkeep is different, and each can help you with different aspects of your adventuring. Make sure to visit each of them to begin understanding what each shopkeep offers.
							</p>
						</div>
				</v-col>
				<v-spacer></v-spacer>	
			</v-row>
		</v-container>
	</GameHelper>
</template>

<script>
import {mapState} from 'vuex'

export default {
	name: 'ShopPhaseHelper',
	computed: {
		...mapState('shopkeepData', [
			'shopkeeps',
			'visiting'
		]
		)
	},
	mounted() {
		console.log(this.shopkeeps[this.visiting])
	}
}
</script>
