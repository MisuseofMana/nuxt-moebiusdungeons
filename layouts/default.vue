<template>
  <v-app>
    <v-img
      class="blurImage positionAbsolute"
      v-if="phase === 'DungeonPage'"
      :key="backgroundImage"
      :src="
        require(`@/assets/images/locations/placemats/${backgroundImage}.png`)
      "
      width="110vw"
      height="100vh"
    />
    <v-container class="fullHeight positionRelative" fluid>
      <v-row class="topRowHeight" align="start">
        <v-col cols="3" class="d-flex flex-row">
          <NavigationDrawer />
          <v-btn @click="toggleDebug">DEBUG BAR</v-btn>
          <DebugBar :debug="debug" @closeDebug="toggleDebug" />
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="2" class="d-flex justify-end">
          <component :is="phase + 'Helper'" />
        </v-col>
      </v-row>
      <v-row
        class="midRowHeight d-flex justify-center align-center"
        align="center"
      >
        <v-spacer></v-spacer>
        <v-col cols="10">
          <Nuxt />
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
      <v-row
        class="bottomRowHeight d-flex justify-end align-center"
        align="end"
        justify="end"
      >
        <v-col cols="12" class="d-flex justify-end">
          <div class="text-subtitle-2">
            <a
              class="mr-2"
              href="https://github.com/MisuseofMana/nuxt-moebiusDungeons/issues"
              >Report Issues</a
            >
            <a
              href="https://github.com/MisuseofMana/nuxt-moebiusDungeons/issues"
              >Changelog</a
            >
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "DefaultLayout",
  data() {
    return {
      debug: false,
    };
  },
  computed: {
    ...mapState("gameData", ["phase", "location"]),
    backgroundImage: function () {
      if (this.phase === "DungeonPage") {
        return this.location;
      }
      return null;
    },
  },
  methods: {
    toggleDebug() {
      this.debug = !this.debug;
    },
  },
};
</script>

<style scoped>
.fullHeight {
  height: 100vh;
}

.topRowHeight {
  min-height: 10%;
}

.midRowHeight {
  min-height: 80%;
}

.bottomRowHeight {
  min-height: 10%;
}

.blurImage {
  filter: blur(5px);
  z-index: 0;
}

.positionAbsolute {
  position: absolute;
}

.positionRelative {
  position: relative;
}
</style>
