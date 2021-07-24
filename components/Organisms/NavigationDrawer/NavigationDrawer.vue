<template>
     <v-sheet
    color="black"
    class="overflow-hidden"
  >
    <v-container class="fill-height">
      <v-row
        align="center"
        justify="start"
      >
        <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-uppercase text-body-1 white--text">{{ username }}</v-list-item-title>
          <v-list-item-title class="text-uppercase text-body-2 white--text">SCORE: {{ score }}</v-list-item-title>
        </v-list-item-content>

        <v-list-item-icon>
          <v-icon color="white" @click.stop="drawer = !drawer">mdi-cog</v-icon>
        </v-list-item-icon>

      </v-list-item>
      </v-row>
    </v-container>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      class="justify-center align-center d-flex text-center"
    >
          <div class="mt-2 mb-5 d-flex flex-column justify-center align-center">
            <div class="text-uppercase text-h6 mb-2">{{ username }}</div>
            <AvatarCanvas :canvasSize="150"/>
          </div>

          <h5 class="text-body-1 mb-2">
            OPTIONS
          </h5>

          <div class="mb-5">
            <v-btn>SAVE GAME</v-btn>
          </div>

          <div class="mb-5">
            <v-btn>TOGGLE TOOLTIPS</v-btn>
          </div>

          <v-divider></v-divider>

          <div class="mt-5">
            <v-btn>SIGN OUT</v-btn>
          </div>


    </v-navigation-drawer>
  </v-sheet>
</template>

<script>
export default {
	name:'NavigationDrawer',
	data() {
		return {
			drawer: null,
		}
	},
	props: {
		username:{
			type: String,
			default:'Wanderer',
		},
		score: {
			type: Number,
			default: 0
		}
	}
}
</script>

<style lang="scss" scoped>

</style>