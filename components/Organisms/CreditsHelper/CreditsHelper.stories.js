export default {
	title: 'Organisms/Helpers/Credits Helper',
}

export const CreditsHelper = (argTypes) => ({
	props: Object.keys(argTypes),
	template: '<CreditsHelper v-bind="$props"/>'
}) 