<template>
     <div class="text-center">
    <v-btn
      color="primary white--text"
      @click="overlay = !overlay"
    >
      {{ tip }}
    </v-btn>

    <v-overlay color="white" opacity=".9" :value="overlay">
      <v-card class="mx-5 pa-5" color="white black--text">
      <slot></slot>
      <div class="cursorPointer">
        <v-btn @click="overlay = !overlay">Understood</v-btn>
      </div>
      </v-card>
    </v-overlay>
  </div>
</template>

<script>
export default {
	name: 'GameHelper',
	data: () => ({
		overlay: false,
	}),
	props: {
		tip: {
			type: String,
			default: 'Helper'
		}
	}
}
</script>

<style lang="scss" scoped>
.cursorPointer {
  cursor:pointer;
}
</style>