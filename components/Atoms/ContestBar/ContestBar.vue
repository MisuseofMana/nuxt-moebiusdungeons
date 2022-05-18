<template>
  <v-container>
    <v-row align="center" class="fullWidth" no-gutters>
      <v-col cols="12" class="mr-0 d-flex align-center">
        <IconCard
          :value="playerStatValue"
          :icon="playerIcon"
          :helpless="playerIsHelpless"
        />
        <v-progress-linear height="8px" :color="barColor" :value="contest" />
        <IconCard
          :value="monsterStatValue"
          :icon="monsterIcon"
          :helpless="monsterIsHelpless"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ContestBar",
  props: {
    monsterIcon: {
      type: String,
      default: "physicalArmor",
    },
    monsterStatValue: {
      type: Number,
      default: 0,
    },
    playerIcon: {
      type: String,
      default: "physicalAttack",
    },
    playerStatValue: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    monsterStatType() {
      if (this.monsterIcon.includes("physical")) return "physical";
      else if (this.monsterIcon.includes("magical")) return "magical";
      return "health";
    },
    playerStatType() {
      if (this.playerIcon.includes("physical")) return "physical";
      else if (this.playerIcon.includes("magical")) return "magical";
      return "health";
    },
    monsterIsHelpless() {
      // if stat is 0, monster is helpless
      if (this.monsterStatValue <= 0) return true;
      // if monster and player stats match
      if (this.monsterIcon === "health") {
        return false;
      }
      // if monster is defending and armor is useless monster is helpless
      if (this.monsterIcon.includes("Armor")) {
        return this.monsterStatType !== this.playerStatType;
      }
      // if stat types match monster is helpless if its attacking with a stat value <= player stat
      if (this.monsterIcon.includes("Attack")) {
        if (this.monsterStatType === this.playerStatType) {
          return this.monsterStatValue <= this.playerStatValue;
        }
      }
      return false;
    },
    // documented in monsterIsHelpless
    playerIsHelpless() {
      if (this.playerStatValue <= 0) return true;
      if (this.playerIcon === "health") {
        return false;
      }
      if (this.playerIcon.includes("Armor")) {
        return this.playerStatType !== this.monsterStatType;
      }
      if (this.playerIcon.includes("Attack")) {
        if (this.playerStatType === this.monsterStatType) {
          return this.playerStatValue <= this.monsterStatValue;
        }
      }
      return false;
    },
    contest() {
      const monster = this.monsterStatValue;
      const player = this.playerStatValue;

      // % of players attack against monsters armor
      if (this.playerIcon.includes("Attack") && !this.monsterIsHelpless) {
        return Math.ceil(100 - (monster / player) * 100);
      } else if (this.monsterIsHelpless) return 100;

      // % of players armor against monsters attack
      if (this.playerIcon.includes("Armor")) {
        if (this.playerIsHelpless) {
          return 0;
        }
        if (player >= monster) {
          return 100;
        }
        if (player < monster) {
          return (player / monster) * 100;
        }
      }
      // % of players health against monsters health
      if (this.playerIcon === "health" && this.monsterIcon === "health") {
        return (player / monster) * 100;
      }
    },
    barColor() {
      if (this.contest > 50) return "green";
      else if (this.contest < 50) return "red";
      return "green";
    },
  },
};
</script>

<style scoped>
.fullWidth {
  width: 100%;
}
</style>
