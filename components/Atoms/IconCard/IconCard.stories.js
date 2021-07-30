export default {
	title: 'Atoms/Icon Card',
	argTypes: {
		icon: {
			control:{
				type: 'select',
				options: ['physicalAttack', 'physicalArmor', 'magicalAttack', 'magicalArmor', 'health']
			},
			default: 'physicalAttack'
		},
		value: {
			control: {
				type: 'number',
			},
			defaultValue: 10
		},
	}
}
  
export const IconCard = (argTypes) => ({
	props: Object.keys(argTypes),
	template: '<IconCard  v-bind="$props"/>',
})