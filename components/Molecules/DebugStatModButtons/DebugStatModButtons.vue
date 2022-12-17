<template>
  <div class="d-flex align-center mr-5">
    <v-btn color="red" class="mr-1 white--text" @click="decreaseStat(5)"
      >-5</v-btn
    >
    <v-btn color="red" class="white--text" @click="decreaseStat(1)">-1</v-btn>
    <div class="mx-2">{{ who.toUpperCase() }} {{ stat.toUpperCase() }}</div>
    <v-btn color="teal" class="mr-1 white--text" @click="increaseStat(1)"
      >+1</v-btn
    >
    <v-btn color="teal" class="white--text" @click="increaseStat(5)">+5</v-btn>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import characterDataMutations from "@/store/characterDataMutations";

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
    ...mapMutations("characterData", [
      characterDataMutations.INCREASE_PLAYER_STAT,
      characterDataMutations.DECREASE_PLAYER_STAT,
    ]),
    ...mapMutations("monsterData", [
      characterDataMutations.INCREASE_MONSTER_STAT,
      characterDataMutations.DECREASE_MONSTER_STAT,
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
