export default {
	title: 'Atoms/Map/Map Icon',
	argTypes: {
		src: {
			control:{
				type: 'select',
				options: ['roads', 'caves', 'forest', 'hills', 'ruins', 'tower', 'eyien'],
			},
			defaultValue: 'roads'
		},
	}
}

export const MapIcon = (argTypes) => ({
	props: Object.keys(argTypes),
	template: '<MapIcon v-bind="$props"/>'
}) 