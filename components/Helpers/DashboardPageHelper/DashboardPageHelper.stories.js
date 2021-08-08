export default {
	title: 'Organisms/Helpers/Dashboard Page Helper',
}

export const DashboardPageHelper = (argTypes) => ({
	props: Object.keys(argTypes),
	template: '<DashboardPageHelper v-bind="$props"/>'
}) 