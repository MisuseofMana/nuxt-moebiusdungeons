import characters from '@/components/Molecules/CharacterImage/CharacterImage.mock.js'

export default {
	title: 'Molecules/Character Image',
	argTypes: {
		who: {
			control:{
				type: 'select',
				options: Object.keys(characters),
			},
			defaultValue: 'swordsman'
		},
		rarity: {
			control:{
				type: 'select',
				options: ['normal', 'virulent', 'fearsome', 'bloodless', 'flawless'],
			},
			defaultValue: 'normal'
		}
	}
}

export const CharacterImage = (argTypes) => ({
	props: Object.keys(argTypes),
	template: '<CharacterImage v-bind="$props"/>'
}) 