<template>
  <v-row>
    <v-spacer />
    <v-col cols="1" class="d-flex flex-column justify-end align-end">
      <div class="mt-6" v-for="item in playerstats" :key="item.key">
        {{ item.abbr }}
      </div>
    </v-col>
    <v-col cols="1">
      <div>PLAYER STATS</div>
      <span v-for="item in playerstats" :key="item.key">
        <v-text-field
          v-model="item.value"
          single-line
          hide-details
          :label="item.abbr"
          type="number"
        />
      </span>
    </v-col>
    <v-col cols="1">
      <div>MONSTER STATS</div>
      <span v-for="item in monsterstats" :key="item.key">
        <v-text-field
          v-model="item.value"
          single-line
          hide-details
          :label="item.abbr"
        />
      </span>
    </v-col>
    <v-col cols="1"></v-col>
    <v-col cols="5">
      <div class="mb-5 text-h4">GAME CALCULATIONS</div>
      <div class="d-flex justify-space-between align-center">
        <div class="text-body-1">ATTACK</div>
        <div class="text-h5">=</div>
        <div class="text-body-1">(ATK + BRN or THT) / 8 - Level</div>
        <div class="text-h5">=</div>
        <div class="text-body-1">
          ({{ playerstats.brawn.value }} + {{ playerstats.attack.value }}) \ 8 -
          {{ playerstats.level.value }}
        </div>
        <div class="text-h5">=</div>
        <div class="text-h5 red--text">
          {{ attackComputation }}
        </div>
      </div>
    </v-col>
    <v-spacer />
  </v-row>
</template>

<script>
import { nanoid } from "nanoid";

export default {
  data() {
    return {
      playerstats: {
        level: { abbr: "LVL", value: 0, key: nanoid() },
        brawn: { abbr: "BRN", value: 0, key: nanoid() },
        speed: { abbr: "SPD", value: 0, key: nanoid() },
        gumption: { abbr: "GUM", value: 0, key: nanoid() },
        thought: { abbr: "THT", value: 0, key: nanoid() },
        instinct: { abbr: "INS", value: 0, key: nanoid() },
        odyl: { abbr: "ODL", value: 0, key: nanoid() },
        attack: { abbr: "ATK", value: 0, key: nanoid() },
        armor: { abbr: "ARM", value: 0, key: nanoid() },
        health: { abbr: "HLT", value: 0, key: nanoid() },
      },
      monsterstats: {
        level: { abbr: "LVL", value: 0, key: nanoid() },
        brawn: { abbr: "BRN", value: 0, key: nanoid() },
        speed: { abbr: "SPD", value: 0, key: nanoid() },
        gumption: { abbr: "GUM", value: 0, key: nanoid() },
        thought: { abbr: "THT", value: 0, key: nanoid() },
        instinct: { abbr: "INS", value: 0, key: nanoid() },
        odyl: { abbr: "ODL", value: 0, key: nanoid() },
        attack: { abbr: "ATK", value: 0, key: nanoid() },
        armor: { abbr: "ARM", value: 0, key: nanoid() },
        health: { abbr: "HLT", value: 0, key: nanoid() },
      },
    };
  },
  computed: {
    attackComputation() {
      const player = this.playerstats;
      const attackMax =
        Number(player.attack.value) + Number(player.brawn.value);
      const level = 8 - player.level.value;
      console.log(attackMax, level);
      return Math.ceil(attackMax * (level / 2));
    },
  },
};
</script>
