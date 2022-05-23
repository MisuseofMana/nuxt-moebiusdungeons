<template>
  <div class="d-flex align-center mr-5">
    <v-btn color="red" class="mr-1" @click="decreaseStat(5)">-5</v-btn>
    <v-btn color="red" @click="decreaseStat(1)">-1</v-btn>
    <div class="mx-2">{{ who.toUpperCase() }} {{ stat.toUpperCase() }}</div>
    <v-btn color="teal" class="mr-1" @click="increaseStat(1)">+1</v-btn>
    <v-btn color="teal" @click="increaseStat(5)">+5</v-btn>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import playerDataMutations from "@/store/playerDataMutations";
import monsterDataMutations from "@/store/monsterDataMutations";

export default {
  name: "DebugButton",
  props: {
    who: {
      type: String,
      default: "player",
    },
    stat: {
      type: String,
      default: "NOT PROVIDED",
    },
  },
  methods: {
    ...mapMutations("playerData", [
      playerDataMutations.INCREASE_PLAYER_STAT,
      playerDataMutations.DECREASE_PLAYER_STAT,
    ]),
    ...mapMutations("monsterData", [
      monsterDataMutations.INCREASE_MONSTER_STAT,
      monsterDataMutations.DECREASE_MONSTER_STAT,
    ]),
    decreaseStat(number) {
      if (this.who === "player") {
        this.DECREASE_PLAYER_STAT({ stat: this.stat, amount: number });
      } else {
        this.DECREASE_MONSTER_STAT({ stat: this.stat, amount: number });
      }
    },
    increaseStat(number) {
      if (this.who === "player") {
        this.INCREASE_PLAYER_STAT({ stat: this.stat, amount: number });
      } else {
        this.INCREASE_MONSTER_STAT({ stat: this.stat, amount: number });
      }
    },
  },
};
</script>
