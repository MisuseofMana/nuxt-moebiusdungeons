<template>
  <v-container>
    <v-row no-gutters>
      <v-col
        cols="12"
        class="pa-0 mb-1 mr-0 d-flex align-center justify-center"
      >
        <InventoryRow :items="topInventory" />
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col
        cols="12"
        class="pa-0 mb-1 mr-0 d-flex align-center justify-center"
      >
        <InventoryRow :items="midInventory" />
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col
        cols="12"
        class="pa-0 mb-1 mr-0 d-flex align-center justify-center"
      >
        <InventoryRow :items="bottomInventory" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import clericItems from "@/mocks/items/clericItems.mock.js";
import graverobberItems from "@/mocks/items/graverobberItems.mock.js";
import merchantItems from "@/mocks/items/merchantItems.mock.js";
import witchItems from "@/mocks/items/witchItems.mock.js";

export default {
  name: "InventoryGrid",
  props: {
    inventory: {
      type: Array,
      default: () => [
        { icon: "" },
        { icon: "" },
        { icon: witchItems.ochreElixer.iconPath },
        { icon: graverobberItems.detrimentBangle.iconPath },
        { icon: merchantItems.etchingRod.iconPath },
        { icon: merchantItems.armorKit.iconPath },
        { icon: witchItems.ancientRune.iconPath },
        { icon: graverobberItems.dessicatedDoll.iconPath },
        { icon: clericItems.greaterHeal.iconPath },
      ],
    },
  },
  computed: {
    topInventory() {
      return this.inventory.slice(0, 3);
    },
    midInventory() {
      return this.inventory.slice(3, 6);
    },
    bottomInventory() {
      return this.inventory.slice(6, 9);
    },
  },
};
</script>
