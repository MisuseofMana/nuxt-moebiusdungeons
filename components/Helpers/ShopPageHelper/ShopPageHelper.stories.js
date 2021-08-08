export default {
	title: 'Organisms/Helpers/Shop Page Helper',
}

export const ShopPageHelper = (argTypes) => ({
	props: Object.keys(argTypes),
	template: '<ShopPageHelper v-bind="$props"/>'
}) 