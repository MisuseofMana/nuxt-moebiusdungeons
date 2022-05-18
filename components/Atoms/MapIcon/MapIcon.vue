<template>
  <v-img
    v-bind="$attrs"
    :src="require(`@/assets/images/locations/${src}.png`)"
    class="positionAbsolute"
    :class="[
      {
        activeLocation: isActive,
        cantTravel: !isTravelable,
        canTravel: isTravelable,
      },
    ]"
    :max-width="width"
    :min-width="width"
    :max-height="height"
    :min-height="height"
  />
</template>

<script>
export default {
  name: "MapIcon",
  data() {
    return {
      imageDimensions: {
        roads: {
          width: 393,
          height: 357,
        },
        caves: {
          width: 503,
          height: 383,
        },
        forest: {
          width: 351,
          height: 376,
        },
        hills: {
          width: 372,
          height: 361,
        },
        ruins: {
          width: 342,
          height: 359,
        },
        tower: {
          width: 168,
          height: 410,
        },
        eyien: {
          width: 168,
          height: 305,
        },
      },
    };
  },
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
    isTravelable: {
      type: Boolean,
      default: false,
    },
    src: {
      type: String,
      default: "roads",
    },
  },
  computed: {
    width() {
      return this.imageDimensions[this.src].width / 5;
    },
    height() {
      return this.imageDimensions[this.src].height / 5;
    },
  },
};
</script>
<style scoped>
.positionAbsolute {
  position: absolute;
}

.activeLocation {
  -webkit-filter: drop-shadow(0 0 10px gold);
  filter: drop-shadow(0 0 10px gold);
}

.cantTravel {
  opacity: 0.2;
}

.canTravel:hover {
  -webkit-filter: drop-shadow(0 0 10px rgb(112, 241, 170));
  filter: drop-shadow(0 0 10px rgb(112, 241, 170));
  cursor: pointer;
}
</style>
