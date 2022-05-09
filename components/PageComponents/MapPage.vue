<template>
  <div>
    <v-row align="center" justify="center">
      <v-col cols="12" class="d-flex flex-column justify-center align-center">
        <SceneHeading phase="Travel" icon="traveler" />
        <InteractiveMap />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "Dashboard",
  computed: {
    ...mapState("saveData", ["savedGame"]),
  },
  methods: {
    ...mapMutations("gameData", ["CHANGE_PHASE"]),
    changePhase(newPhase) {
      this.CHANGE_PHASE(newPhase);
    },
  },
};
</script>
