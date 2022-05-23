<template>
  <v-row justify="center" dense>
    <!-- Player Log -->
    <v-col cols="2">
      <v-card
        min-height="100%"
        class="pa-4 text-center"
        color="rgba(255,255,255,.4)"
      >
        Player Log
        <LogItem :logItems="playerLogItems" />
      </v-card>
    </v-col>

    <!-- Player Image and Inventory -->
    <v-col cols="2">
      <v-card
        min-height="100%"
        class="pa-4 text-center d-flex flex-column justify-center align-center"
        color="rgba(255,255,255,.4)"
      >
        <div class="text-h6 mb-2">{{ playerClass }}</div>
        <CharacterImage
          rarity=""
          :who="characters[playerClass].image"
          class="mb-3"
        />
        <InventoryGrid :inventory="playerInventory" />
        <Coin :wealth="playerWealth" />
      </v-card>
    </v-col>

    <!-- Stat Info and Controls -->
    <v-col cols="3">
      <v-card
        min-height="100%"
        class="pa-4 d-flex flex-column justify-center align-center"
        color="rgba(255,255,255,.4)"
      >
        <SceneHeading phase="Dungeon Phase" icon="monster" class="mb-5" />
        <!-- Health VS Health -->
        <ContestBar
          monsterIcon="health"
          :monsterStatValue="monsterHealthValue"
          playerIcon="health"
          :playerStatValue="playerHealthValue"
        />
        <ContestBar
          :monsterIcon="monsterArmorType + 'Armor'"
          :monsterStatValue="monsterArmorValue"
          :playerIcon="playerAttackType + 'Attack'"
          :playerStatValue="playerAttackValue"
        />
        <ContestBar
          class="mb-3"
          :monsterIcon="monsterAttackType + 'Attack'"
          :monsterStatValue="monsterAttackValue"
          :playerIcon="playerArmorType + 'Armor'"
          :playerStatValue="playerArmorValue"
        />
        <Button color="teal accent-3" class="mb-2" text="Trade Blows" />
        <Button color="teal accent-3" class="mb-2" :text="special" />
        <MettleGauge class="mb-5" />

        <Button color="teal accent-3" class="mb-2" text="Turn Tail" />
      </v-card>
    </v-col>

    <!-- Monster Image and Inventory -->
    <v-col cols="2">
      <v-card
        min-height="100%"
        class="pa-4 text-center d-flex flex-column justify-start align-center"
        color="rgba(255,255,255,.4)"
      >
        <div class="text-h6 mb-2">{{ monsterClass }}</div>
        <CharacterImage
          rarity=""
          :who="characters[monsterClass].image"
          class="mb-3"
        />
        <Coin :wealth="monsterCoins" />
      </v-card>
    </v-col>

    <v-col cols="2">
      <v-card
        min-height="100%"
        class="pa-4 text-center"
        color="rgba(255,255,255,.4)"
      >
        Monster Log
        <LogItem :logItems="monsterLogItems" />
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
      playerAttackType: (state) => state.player.attackType,
      playerArmorType: (state) => state.player.armorType,
      playerHealthValue: (state) => state.player.health,
      playerAttackValue: (state) => state.player.attack,
      playerArmorValue: (state) => state.player.armor,
      playerLogItems: (state) => state.dungeonLogItems,
    }),
    ...mapState("monsterData", {
      monsterClass: (state) => state.monster.class,
      monsterLevel: (state) => state.monster.level,
      monsterAttackType: (state) => state.monster.attackType,
      monsterArmorType: (state) => state.monster.armorType,
      monsterHealthValue: (state) => state.monster.health,
      monsterAttackValue: (state) => state.monster.attack,
      monsterArmorValue: (state) => state.monster.armor,
      monsterLogItems: (state) => state.dungeonLogItems,
    }),
    monsterCoins() {
      return Math.ceil(this.monsterLevel);
    },
  },
};
</script>
