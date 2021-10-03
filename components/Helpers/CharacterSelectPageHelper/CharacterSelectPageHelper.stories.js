export default {
	title: 'Organisms/Helpers/Character Select Helper',
}

export const CharacterSelectPageHelper = (argTypes) => ({
	props: Object.keys(argTypes),
	template: '<CharacterSelectPageHelper v-bind="$props"/>'
}) 