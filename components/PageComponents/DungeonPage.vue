<template>
  <v-row justify="center" dense>
    <!-- Player Log -->
    <v-col cols="2">
      <v-card
        min-height="100%"
        class="pa-4 text-center"
        color="rgba(255,255,255,.2)"
      >
        Player Log
        <LogItem />
      </v-card>
    </v-col>

    <!-- Player Image and Inventory -->
    <v-col cols="2">
      <v-card
        min-height="100%"
        class="pa-4 text-center d-flex flex-column justify-center align-center"
        color="rgba(255,255,255,.2)"
      >
        <div class="text-h6 mb-2">{{ playerClass }}</div>
        <CharacterImage :who="characters[playerClass].image" class="mb-3" />
        <InventoryGrid :inventory="playerInventory" />
        <Coin :wealth="playerWealth" />
      </v-card>
    </v-col>

    <!-- Stat Info and Controls -->
    <v-col cols="3">
      <v-card
        min-height="100%"
        class="pa-4 d-flex flex-column justify-center align-center"
        color="rgba(255,255,255,.2)"
      >
        <SceneHeading phase="Dungeon Phase" icon="monster" class="mb-5" />
        <MettleGauge class="mb-3" />
        <ContestBar />
        <ContestBar />
        <ContestBar class="mb-3" />
        <Button color="teal accent-3" class="mb-2" text="Trade Blows" />
        <Button color="teal accent-3" class="mb-2" :text="special" />
        <Button color="teal accent-3" class="mb-2" text="Turn Tail" />
      </v-card>
    </v-col>

    <!-- Monster Image and Inventory -->
    <v-col cols="2">
      <v-card
        min-height="100%"
        class="pa-4 text-center d-flex flex-column justify-center align-center"
        color="rgba(255,255,255,.2)"
      >
        <div class="text-h6 mb-2">{{ monsterClass }}</div>
        <CharacterImage :who="characters[monsterClass].image" class="mb-3" />
        <InventoryGrid />
        <Coin :wealth="monsterCoins" />
      </v-card>
    </v-col>

    <v-col cols="2">
      <v-card
        min-height="100%"
        class="pa-4 text-center"
        color="rgba(255,255,255,.2)"
      >
        Monster Log
        <LogItem />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from "vuex";
import characters from "@/components/Molecules/CharacterImage/CharacterImage.mock.js";

export default {
  name: "DungeonPage",
  data() {
    return {
      characters,
    };
  },
  computed: {
    ...mapState("playerData", {
      playerClass: (state) => state.player.class,
      special: (state) => state.player.special,
      playerWealth: (state) => state.player.wealth,
      playerInventory: (state) => state.player.inventory,
    }),
    ...mapState("monsterData", {
      monsterClass: (state) => state.monster.class,
      monsterLevel: (state) => state.monster.level,
    }),
    monsterCoins() {
      return this.monsterLevel;
    },
  },
};
</script>
