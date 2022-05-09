<template>
  <v-overlay :value="debug">
    <div class="my-2">CLOSE BAR</div>
    <v-btn color="red" @click="closeDebug">Close</v-btn>
    <hr class="mt-5" />
    <div class="my-2">PHASE</div>
    <v-btn @click="changePhase('DashboardPage')">Dashboard Page</v-btn>
    <v-btn @click="changePhase('CharacterSelectPage')"
      >Character Select Page</v-btn
    >
    <v-btn @click="changePhase('MapPage')">Map Page</v-btn>
    <v-btn @click="changePhase('DungeonPage')">Dungeon Page</v-btn>
    <v-btn @click="changePhase('ShopPage')">Shop Page</v-btn>
    <v-btn @click="changePhase('LeaderBoardPage')">Leader Board Page</v-btn>
  </v-overlay>
</template>

<script>
import { mapMutations } from "vuex";
import gameDataMutations from "@/store/gameDataMutations";

export default {
  name: "DebugBar",
  props: {
    debug: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    ...mapMutations("gameData", [gameDataMutations.SET_GAME_PHASE]),
    changePhase(newPhase) {
      this.closeDebug();
      this.SET_GAME_PHASE(newPhase);
    },
    closeDebug() {
      this.$emit("closeDebug");
    },
  },
};
</script>
