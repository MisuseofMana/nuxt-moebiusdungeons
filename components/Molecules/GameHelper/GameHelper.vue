<template>
  <div class="text-center">
    <v-btn color="success white--text" @click="overlay = !overlay">
      {{ tip }}
    </v-btn>

    <v-overlay
      z-index="999"
      color="black"
      opacity=".8"
      class="px-10"
      :value="overlay"
    >
      <v-card class="overflow" color="white black--text" height="75vh">
        <v-row no-gutters justify="end" class="pt-10 px-10">
          <v-col cols="1" class="d-flex justify-end">
            <v-img
              class="cursorPointer"
              @click="overlay = !overlay"
              :src="require('@/assets/images/ui/redX.png')"
              max-height="40"
              max-width="40"
            />
          </v-col>
        </v-row>

        <v-row no-gutters class="px-10 mt-0">
          <v-col>
            <slot></slot>
          </v-col>
        </v-row>

        <v-row justify="end" class="pb-10">
          <v-col cols="2">
            <v-btn color="red" @click="overlay = !overlay">Close Overlay</v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-overlay>
  </div>
</template>

<script>
export default {
  name: "GameHelper",
  data: () => ({
    overlay: false,
  }),
  props: {
    tip: {
      type: String,
      default: "Helper",
    },
  },
};
</script>

<style lang="scss" scoped>
.cursorPointer {
  cursor: pointer;
}

.overflow {
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>
