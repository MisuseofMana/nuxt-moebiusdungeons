export default {
	title: 'Organisms/Navigation Drawer',
	argTypes: {
		src: {
			control:{
				type: 'select',
				options: ['monster', 'player', 'shopkeep', 'traveler'],
			},
			defaultValue: 'monster'
		},
	}
}

export const NavigationDrawer = (argTypes) => ({
	props: Object.keys(argTypes),
	template: '<NavigationDrawer v-bind="$props"/>'
}) 