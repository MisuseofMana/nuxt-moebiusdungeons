export default {
  title: "Atoms/Content Card",
  argTypes: {
    icon: {
      control: {
        type: "select",
        options: [
          "physicalAttack",
          "physicalArmor",
          "magicalAttack",
          "magicalArmor",
          "health",
        ],
      },
      default: "physicalAttack",
    },
    value: {
      control: {
        type: "number",
      },
      defaultValue: 10,
    },
  },
};

export const ContentCard = (argTypes) => ({
  props: Object.keys(argTypes),
  template: '<ContentCard v-bind="$props"/>',
});
