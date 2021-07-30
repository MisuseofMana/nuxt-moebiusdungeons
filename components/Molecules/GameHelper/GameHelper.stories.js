export default {
	title: 'Molecules/Game Helper',
	// argTypes: {
	// 	src: {
	// 		control:{
	// 			type: 'select',
	// 			options: ['monster', 'player', 'shopkeep', 'traveler'],
	// 		},
	// 		defaultValue: 'monster'
	// 	},
	// }
}

export const GameHelper = (argTypes) => ({
	props: Object.keys(argTypes),
	template: '<GameHelper v-bind="$props"/>'
}) 