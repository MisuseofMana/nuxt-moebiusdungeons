<template>
  <v-sheet
    height="100%"
    elevation="2"
    class="d-flex flex-column align-center justify-center"
    :class="hoverable ? 'hoverable' : ''"
  >
    <slot class="text-left">Some Content</slot>
  </v-sheet>
</template>

<script>
export default {
  name: "ContentCard",
  props: {
    hoverable: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      cardColor: "amber",
    };
  },
};
</script>

<style scoped>
.hoverable:hover {
  background: gold;
  cursor: pointer;
}
</style>
