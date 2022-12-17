<template>
  <v-card class="d-flex align-center justify-center px-4 py-1" width="100%">
    <div class="text-uppercase pr-2">Mettle:</div>
    <v-img
      v-for="n in availableMettle"
      :key="`availableMettle${n}`"
      v-bind="$attrs"
      height="20"
      width="20"
      max-height="20"
      max-width="20"
      :src="require(`@/assets/images/ui/${mettleType}Mettle.png`)"
    />
    <v-img
      v-for="n in totalMettle - availableMettle"
      :key="`unavailableMettle${n}`"
      v-bind="$attrs"
      class="grayscale"
      height="20"
      width="20"
      max-height="20"
      max-width="20"
      :src="require(`@/assets/images/ui/${mettleType}Mettle.png`)"
    />
  </v-card>
</template>

<script>
export default {
  name: "MettleGauge",
  props: {
    mettleType: {
      type: String,
      default: "swordsman",
    },
    totalMettle: {
      type: Number,
      default: 3,
    },
    availableMettle: {
      type: Number,
      default: 1,
    },
  },
};
</script>

<style lang="scss" scoped>
.grayscale {
  filter: saturate(0);
}
</style>
