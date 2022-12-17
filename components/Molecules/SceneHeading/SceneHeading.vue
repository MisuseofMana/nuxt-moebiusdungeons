<template>
  <div class="d-flex align-center mb-2">
    <SigilImage :src="icon" :width="35" :height="35" class="mr-2" />
    <div class="text-h4">{{ title }}</div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "SceneHeading",
  props: {
    phase: {
      type: String,
      default: "Dungeon Phase",
    },
    icon: {
      type: String,
      default: "shopkeep",
    },
  },
  computed: {
    ...mapState("gameData", ["location"]),
    title() {
      if (this.phase === "Dungeon Phase") {
        return this.location;
      }
      return this.phase;
    },
  },
};
</script>
