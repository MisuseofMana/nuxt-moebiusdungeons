<template>
	<GameHelper tip="Shop Select Help">
		<v-container>
			<v-row>
				<v-spacer></v-spacer>
				<v-col cols="9">
					<div class="text-left">
						<h5 class="text-h5">Shop Select Helper</h5>
							<p class="text-body-1">
								When you return to Eyien from the wilds you may select from available shopkeepers, rest, or retire from your service to the Coterie.
								On rare occasion you may find a shopkeeper in the wilds in certain locations.
							</p>
							<h5 class="text-h5">
								Choosing a Shopkeeper
							</h5>
							<p class="text-body-1">
								Each shopkeep is different, and each can help you with different aspects of your adventuring. Make sure to visit each of them to begin understanding what each shopkeep offers.
							</p>
							<h5 class="text-h5">
								Rest
							</h5>
							<p class="text-body-1">
								Resting recovers one use of mettle and a bit of health in exchange for one coin.
							</p>
							<h5 class="text-h5">
								Retire
							</h5>
							<p class="text-body-1">
								If you find yourself near death, or grow weary in your travels, retiring is your best bet.
								This option ends your current game and uploads your highscore to the Kingloyal Leaderboards.
								If you die in the wilds your game data will be deleted, pick yourself up and start a new game.
							</p>
						</div>
				</v-col>
				<v-spacer></v-spacer>	
			</v-row>
		</v-container>
	</GameHelper>
</template>

<script>
export default {
	name: 'ShopSelectHelper',
}
</script>
