export default {
  title: "Atoms/Log Item",
  argTypes: {
    logItems: {
      control: {
        type: "array",
      },
    },
  },
};

export const LogItem = (argTypes) => ({
  props: Object.keys(argTypes),
  template: '<LogItem v-bind="$props"/>',
});

LogItem.args = {
  logItems: [
    "player took 10 damage",
    "player dealt 12 damage",
    "player is stunned",
  ],
};
