import iconData from "./IconCard.data";

export default {
  title: "Atoms/Icon Card",
  argTypes: {
    icon: {
      control: {
        type: "select",
        options: iconData,
      },
    },
    value: {
      control: {
        type: "number",
      },
    },
    helpless: {
      control: {
        type: "boolean",
      },
    },
  },
};

export const IconCard = (argTypes) => ({
  props: Object.keys(argTypes),
  template: '<IconCard  v-bind="$props"/>',
});

IconCard.args = {
  icon: "physicalAttack",
  value: 10,
  helpless: false,
};
