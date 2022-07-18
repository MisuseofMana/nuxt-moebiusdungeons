<template>
  <v-sheet class="px-5 py-3 overflow-y-auto" height="300px">
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

    <div class="mb-2">
      <div class="my-2 text-h6">Log Generation</div>
      <span>Player Log:</span>
      <input class="grey white--text pa-2" v-model="playerLogText" />
      <v-btn color="teal" @click="addToPlayerLog()">Send To Log</v-btn>
      <v-btn color="orange" @click="CLEAR_PLAYER_LOG()">Clear Player Log</v-btn>
    </div>

    <div>
      <span>Monster Log:</span>
      <input class="grey white--text pa-2" v-model="monsterLogText" />
      <v-btn color="teal" @click="addToMonsterLog()">Send To Log</v-btn>
      <v-btn color="orange" @click="CLEAR_MONSTER_LOG()"
        >Clear Monster Log</v-btn
      >
    </div>
  </v-sheet>
</template>

<script>
import { mapMutations } from "vuex";
import { nanoid } from "nanoid";
import gameDataMutations from "@/store/gameDataMutations";
import characterDataMutations from "@/store/characterDataMutations";

export default {
  name: "DebugBar",
  data() {
    return {
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
        { text: "Combat Formula", pageName: "CombatFormulaPage" },
      ],
      stats: ["health", "attack", "armor"],
      playerLogText: "",
      monsterLogText: "",
    };
  },
  methods: {
    ...mapMutations("gameData", [gameDataMutations.SET_GAME_PHASE]),
    ...mapMutations("characterData", [
      characterDataMutations.ADD_TO_MONSTER_LOG,
      characterDataMutations.CLEAR_MONSTER_LOG,
      characterDataMutations.ADD_TO_PLAYER_LOG,
      characterDataMutations.CLEAR_PLAYER_LOG,
    ]),
    changePhase(newPhase) {
      this.SET_GAME_PHASE(newPhase);
    },
    addToMonsterLog() {
      this.ADD_TO_MONSTER_LOG({ text: this.monsterLogText, id: nanoid() });
    },
    addToPlayerLog() {
      this.ADD_TO_PLAYER_LOG({ text: this.playerLogText, id: nanoid() });
    },
  },
};
</script>
