export default {
	title: 'Atoms/Map/World Map',
}

export const WorldMap = (argTypes) => ({
	props: Object.keys(argTypes),
	template: '<WorldMap v-bind="$props"/>'
}) 