export default {
	title: 'Organisms/Helpers/Character Select Helper',
}

export const CharacterSelectHelper = (argTypes) => ({
	props: Object.keys(argTypes),
	template: '<CharacterSelectHelper v-bind="$props"/>'
}) 