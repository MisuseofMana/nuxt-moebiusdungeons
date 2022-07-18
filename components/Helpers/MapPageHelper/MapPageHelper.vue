<template>
  <GameHelper tip="Map Help">
    <v-row align="center">
      <v-spacer></v-spacer>
      <v-col
        cols="8"
        align-self="center"
        class="d-flex flex-column justify-center align-center"
      >
        <div class="d-flex flex-row align-center justify-center">
          <h1 class="text-h5 mb-3 mr-3">WELL MET.</h1>
          <v-img
            max-width="250"
            :src="require('@/assets/images/flavor/items.png')"
            alt=""
          />
        </div>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
    <v-row align="center">
      <v-spacer></v-spacer>
      <v-col cols="6" align-self="center" class="text-left">
        <p class="text-body-1">
          This is a high fantasy, hack and slash, web game. The goal is to slay
          monsters in the name of the grand capitol city of
          <span class="purple--text lighten-2">AMARA</span>, the glimmering
          walled citadel, the last standing bastion of the realm,
          <span class="purple--text lighten-2">"EYIEN"</span>. You are in the
          employ of the king of these lands, and call yourself one of the
          kingloyal of the coterie. You will journey outward from Eyien, taming
          the wilds outside the walls. The kingdom will provision you coins for
          each monster you slay. Use this wealth to buy equipment and trinkets
          to bolster your strength in your effort to become a legend.
        </p>

        <p>
          Tougher beasts drop more coins and some even hold relics of the realm.
        </p>

        <p>
          Take on the role of the sword-wise
          <span class="purple--text lighten-2">Swordsman</span>
          able to withstand all manner of cut and bruise. Inhabit the scholared
          <span class="purple--text lighten-2">Mage</span>, a powerful magic
          caster, gifted the flame of the kingdom. Swadle yourself in a cloak as
          the rapscallion <span class="purple--text lighten-2">Varlet</span>, a
          dastardly vagrant prepared for any scenario.
        </p>

        <p>
          Each character class is different, so try them all out. Rinse then
          repeat. How long can you survive?
        </p>

        <p>
          Perhaps you will become renown in the eyes of the kingloyal. Make a
          name for yourself.
        </p>
        <p><span class="purple--text lighten-2">Do not falter.</span></p>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </GameHelper>
</template>

<script>
export default {
  name: "CharacterSelectPageHelper",
};
</script>
