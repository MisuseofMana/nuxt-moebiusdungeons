export default {
	title: 'Organisms/Interactive Map',
}

export const InteractiveMap = (argTypes) => ({
	props: Object.keys(argTypes),
	template: '<InteractiveMap v-bind="$props"/>'
}) 