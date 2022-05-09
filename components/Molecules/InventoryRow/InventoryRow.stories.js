export default {
  title: "Molecules/Inventory Row",
};

export const InventoryGrid = (argTypes) => ({
  props: Object.keys(argTypes),
  template: '<InventoryGrid v-bind="$props"/>',
});
