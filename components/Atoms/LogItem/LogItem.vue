<template>
  <div>
    <div v-for="item in logItems" class="borders" :key="item.id">
      <transition name="fade" mode="out-in" appear>
        <div class="text-body-2 py-2 text-center">
          {{ item.text }}
        </div>
      </transition>
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
  border-bottom: 1px black solid;
}

.borders:first-child {
  margin-top: 15px;
  border-top: 1px black solid;
}
</style>
