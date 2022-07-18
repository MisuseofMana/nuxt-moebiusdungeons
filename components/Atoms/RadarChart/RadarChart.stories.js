export default {
  title: "Atoms/Radar Chart",
  argTypes: {
    chartLabel: {
      control: {
        type: "string",
      },
      defaultValue: "A Dataset",
    },
  },
};

export const RadarChart = (argTypes) => ({
  props: Object.keys(argTypes),
  template: '<RadarChart v-bind="$props"/>',
});
