<template>
  <v-btn :color="color">{{ text }}</v-btn>
</template>

<script>
export default {
  name: "DebugButton",
  props: {
    text: {
      type: String,
      default: "Text Here",
    },
    color: {
      type: String,
      default: "blue",
    },
  },
};
</script>
