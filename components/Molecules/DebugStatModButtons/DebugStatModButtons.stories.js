export default {
  title: "Molecules/Debug Stat Mod Buttons",
  argTypes: {
    text: {
      control: {
        type: "string",
      },
      defaultValue: "Button Text",
    },
  },
};

export const DebugStatModButtons = (argTypes) => ({
  props: Object.keys(argTypes),
  template: '<DebugStatModButtons v-bind="$props"/>',
});
