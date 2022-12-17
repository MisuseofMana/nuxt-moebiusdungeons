<template>
  <v-btn :color="color" class="white--text">{{ text }}</v-btn>
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
