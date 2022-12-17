export default {
  title: "Molecules/Debug Button",
  argTypes: {
    text: {
      control: {
        type: "string",
      },
      defaultValue: "Button Text",
    },
    color: {
      control: {
        type: "string",
      },
      defaultValue: "blue",
    },
  },
};

export const DebugButton = (argTypes) => ({
  props: Object.keys(argTypes),
  template: '<DebugButton v-bind="$props"/>',
});
