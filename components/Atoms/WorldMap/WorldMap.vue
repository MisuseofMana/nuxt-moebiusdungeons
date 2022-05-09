<template>
  <div class="mapImage" :style="mapImage">
    <slot />
  </div>
</template>

<script>
export default {
  name: "WorldMap",
  data() {
    return {
      mapImage: {
        backgroundImage: `url(${require("@/assets/images/locations/world-map.png")})`,
      },
    };
  },
};
</script>

<style scoped>
.mapImage {
  position: relative;
  width: 900px;
  height: 550px;
  background-size: 900px 550px;
}
</style>
