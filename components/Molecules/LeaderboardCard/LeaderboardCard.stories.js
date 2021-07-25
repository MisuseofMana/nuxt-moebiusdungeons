export default {
  title: 'Molecules/Leaderboard Card',
}

export const LeaderboardCard = (argTypes) => ({
  props: Object.keys(argTypes),
  template: '<LeaderboardCard v-bind="$props"/>'
}) 