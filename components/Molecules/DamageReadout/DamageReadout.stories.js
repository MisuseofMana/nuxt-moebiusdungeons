export default {
	title: 'Molecules/Damage Readout',
	argTypes: {
		incomingDamage: {
			control:{
				type: 'number',
			},
			defaultValue: 0
		},
		incomingDamageType: {
			control:{
				type: 'select',
				options: ['physical', 'magical']
			},
			defaultValue: 'physical'
		},
		defendersArmor: {
			control:{
				type: 'number',
			},
			defaultValue: 0
		},
		defendersArmorType: {
			control: {
				type:'select',
				options:['physical', 'magical']
			},
			defaultValue:'physical' 
		}
	}
}
  
export const DamageReadout = (argTypes) => ({
	props: Object.keys(argTypes),
	template: '<DamageReadout  v-bind="$props"/>',
})