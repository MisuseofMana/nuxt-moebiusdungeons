<template>
  <div>
    <v-card
      color="white"
      width="60"
      height="60"
      min-height="60"
      min-width="60"
      class="size d-flex flex-column align-center justify-center mr-0"
    >
      <v-img
        :src="require(`@/assets/images/ui/${icon}.png`)"
        height="60"
        width="60"
        max-height="60"
        max-width="60"
        min-height="60"
        min-width="60"
      >
      </v-img>
      <v-overlay
        :opacity="0"
        :absolute="true"
        :value="true"
        class="text-h6 text-center"
        z-index="1"
      >
        <v-img
          class="red-shadow"
          v-if="helpless"
          :src="require(`@/assets/images/ui/redX.png`)"
          height="50"
          width="50"
          max-height="50"
          max-width="50"
        >
        </v-img>
        <v-overlay :opacity="0" color="white" :absolute="true" :value="true">
          <div class="black-shadow white--text">
            {{ value }}
          </div>
        </v-overlay>
      </v-overlay>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "IconCard",
  props: {
    icon: {
      type: String,
      default: "physicalAttack",
    },
    value: {
      type: Number,
      default: 0,
    },
    helpless: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.black-shadow {
  text-shadow: black 0 0 10px;
}
</style>
