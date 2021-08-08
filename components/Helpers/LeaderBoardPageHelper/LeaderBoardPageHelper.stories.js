export default {
	title: 'Organisms/Helpers/LeaderBoard Page Helper',
}

export const LeaderBoardPageHelper = (argTypes) => ({
	props: Object.keys(argTypes),
	template: '<LeaderBoardPageHelper v-bind="$props"/>'
}) 