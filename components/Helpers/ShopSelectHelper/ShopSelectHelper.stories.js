export default {
	title: 'Organisms/Helpers/Shop Select Helper',
}

export const ShopSelectHelper = (argTypes) => ({
	props: Object.keys(argTypes),
	template: '<ShopSelectHelper v-bind="$props"/>'
}) 