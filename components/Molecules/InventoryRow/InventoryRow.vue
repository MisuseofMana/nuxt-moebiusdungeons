<template>
  <div class="d-flex justify-center ma-0">
    <v-card
      v-for="(item, index) in items"
      :key="item.icon + index"
      color="white"
      min-width="50"
      min-height="50"
      max-height="50"
      max-width="50"
      class="pa-0 mx-1 d-flex text-center justify-center align-center"
    >
      <v-img
        max-width="40"
        min-width="40"
        max-height="40"
        min-height="40"
        v-if="item.icon"
        :src="require(`@/assets/images/items/${item.icon}`)"
      />
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [{ icon: "" }, { icon: "" }, { icon: "" }],
    },
  },
};
</script>
