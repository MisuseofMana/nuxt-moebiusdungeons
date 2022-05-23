<template>
  <v-overlay opacity=".8" :value="debug" width="75%">
    <div class="my-2 mb-5">
      <v-btn color="red" @click="closeDebug">CLOSE</v-btn>
    </div>

    <div class="mb-5">
      <div class="my-2 text-h6">Pages</div>
      <DebugButton
        v-for="(button, index) in pagesButtons"
        :key="button.text + index"
        :text="button.text"
        :color="pagesButtonColor"
        @click.native="changePhase(button.pageName)"
        class="mr-1"
      />
    </div>

    <div class="mb-5">
      <div class="my-2 text-h6">Battle Stats</div>
      <div class="d-flex">
        <div class="d-flex flex-column mb-2">
          <DebugStatModButtons
            v-for="(stat, index) in stats"
            :key="`player${stat}${index}`"
            who="player"
            :stat="stat"
            class="mb-2"
          />
        </div>
        <div class="d-flex flex-column mb-2">
          <DebugStatModButtons
            v-for="(stat, index) in stats"
            :key="`monster${stat}${index}`"
            who="monster"
            :stat="stat"
            class="mb-2"
          />
        </div>
      </div>
    </div>
  </v-overlay>
</template>

<script>
import { mapMutations } from "vuex";
import gameDataMutations from "@/store/gameDataMutations";

export default {
  name: "DebugBar",
  data() {
    return {
      openBar: "pages",
      pagesButtonColor: "teal",
      pagesButtons: [
        { text: "Dashboard", pageName: "DashboardPage" },
        {
          text: "Character Select",
          pageName: "CharacterSelectPage",
        },
        { text: "Map", pageName: "MapPage" },
        { text: "Dungeon", pageName: "DungeonPage" },
        { text: "Shop", pageName: "ShopPage" },
        { text: "Leader Board", pageName: "LeaderBoardPage" },
      ],
      stats: ["health", "attack", "armor"],
    };
  },
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
