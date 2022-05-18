<template>
  <v-container>
    <v-row align="center" justify="center">
      <SceneHeading phase="Character Select" icon="traveler" />
    </v-row>
    <v-row align="center" justify="center">
      <v-col cols="12" class="d-flex justify-center">
        <CharacterImage
          who="swordsman"
          @click.native="selectCharacter(swordsman)"
          class="mr-4"
        />
        <CharacterImage
          who="mage"
          class="mr-4"
          @click.native="selectCharacter(mage)"
        />
        <CharacterImage who="varlet" @click.native="selectCharacter(varlet)" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import gameDataMutations from "@/store/gameDataMutations";
import playerDataMutations from "@/store/playerDataMutations";

export default {
  name: "CharacterSelectPage",
  computed: {
    ...mapState("characterTemplates", ["swordsman", "mage", "varlet"]),
  },
  methods: {
    ...mapMutations("gameData", [gameDataMutations.SET_GAME_PHASE]),
    ...mapMutations("playerData", [playerDataMutations.OVERWRITE_PLAYER_DATA]),
    selectCharacter(who) {
      //change character in store
      this.OVERWRITE_PLAYER_DATA(who);
      this.SET_GAME_PHASE("MapPage");
    },
  },
};
</script>
