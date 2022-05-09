<template>
  <div>
    <div
      class="borders"
      v-for="(items, index) in logItems"
      :key="items + index"
    >
      <div class="text-body-2 py-2 text-center">
        {{ items }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LogItem",
  props: {
    logItems: {
      type: Array,
      default: () => ["one", "two", "three", "four", "five"],
    },
  },
};
</script>

<style scoped>
.borders {
  border-top: 1px black solid;
}

.borders:first-child {
  border-top: none;
  border-bottom: none;
}
</style>
