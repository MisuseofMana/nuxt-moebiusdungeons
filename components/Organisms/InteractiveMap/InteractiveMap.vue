<template>
  <v-row justify="center">
    <v-col cols="12">
      <WorldMap>
        <MapIcon
          v-for="location in locations"
          :style="offsets[location]"
          :isActive="activeLocation === location"
          :isTravelable="travelLookupTable[activeLocation].includes(location)"
          :key="location"
          :src="location"
          @click.native="travelTo(location)"
        />
      </WorldMap>
    </v-col>
  </v-row>
</template>

<script>
import { mapMutations } from "vuex";
import gameDataMutations from "@/store/gameDataMutations";

export default {
  name: "InteractiveMap",
  methods: {
    ...mapMutations("gameData", [
      gameDataMutations.SET_GAME_LOCATION,
      gameDataMutations.SET_GAME_PHASE,
    ]),
    travelTo(location) {
      console.log(location);

      this.SET_GAME_LOCATION(location);
      this.SET_GAME_PHASE("DungeonPage");
    },
  },
  data() {
    return {
      activeLocation: "roads",
      travelLookupTable: {
        roads: ["eyien", "caves", "forest", "hills", "roads"],
        caves: ["roads", "caves"],
        forest: ["ruins", "hills", "roads", "forest"],
        hills: ["tower", "roads", "caves", "hills"],
        ruins: ["forest", "ruins"],
        eyien: ["roads", "eyien"],
      },
      locations: [
        "roads",
        "caves",
        "forest",
        "hills",
        "ruins",
        "tower",
        "eyien",
      ],
      offsets: {
        roads: {
          top: "316px",
          left: "398px",
        },
        caves: {
          top: "385px",
          left: "130px",
        },
        forest: {
          top: "140px",
          left: "550px",
        },
        hills: {
          top: "120px",
          left: "280px",
        },
        ruins: {
          top: "40px",
          left: "760px",
        },
        tower: {
          top: "70px",
          left: "80px",
        },
        eyien: {
          top: "460px",
          left: "690px",
        },
      },
    };
  },
};
</script>
