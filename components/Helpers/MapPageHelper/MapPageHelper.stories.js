export default {
  title: "Organisms/Helpers/Map Page Helper",
};

export const MapPageHelper = (argTypes) => ({
  props: Object.keys(argTypes),
  template: '<MapPageHelper v-bind="$props"/>',
});
