<template>
  <v-card color="transparent" flat :width="coinHeight">
    <v-img
      v-bind="$attrs"
      :height="coinHeight"
      :width="coinHeight"
      :max-width="coinHeight"
      :max-height="coinHeight"
      :min-height="coinHeight"
      :min-width="coinHeight"
      :src="require('@/assets/images/ui/coin.png')"
    />
    <v-overlay
      opacity="0"
      :absolute="true"
      :value="true"
      class="white--text text-h4"
    >
      <div class="shadow">
        {{ wealth }}
      </div>
    </v-overlay>
  </v-card>
</template>

<script>
export default {
  name: "Coin",
  props: {
    wealth: {
      type: Number,
      default: 0,
    },
    coinHeight: {
      type: String,
      default: "75px",
    },
  },
};
</script>

<style lang="scss" scoped>
.shadow {
  text-shadow: black -1px 0 5px;
}
</style>
