export default {
	title: 'Organisms/Helpers/Shop Phase Helper',
}

export const ShopPhaseHelper = (argTypes) => ({
	props: Object.keys(argTypes),
	template: '<ShopPhaseHelper v-bind="$props"/>'
}) 