import iconData from "./ContestBar.data";

export default {
  title: "Atoms/Contest Bar",
  argTypes: {
    monsterIcon: {
      control: {
        type: "select",
        options: iconData,
      },
    },
    monsterStatValue: {
      control: {
        type: "number",
      },
    },
    playerIcon: {
      control: {
        type: "select",
        options: iconData,
      },
    },
    playerStatValue: {
      control: {
        type: "number",
      },
    },
  },
};

export const ContestBar = (argTypes) => ({
  props: Object.keys(argTypes),
  template: "<ContestBar v-bind='$props'/>",
});

ContestBar.args = {
  monsterIcon: "physicalArmor",
  playerIcon: "physicalAttack",
  monsterStatValue: 5,
  playerStatValue: 10,
};
