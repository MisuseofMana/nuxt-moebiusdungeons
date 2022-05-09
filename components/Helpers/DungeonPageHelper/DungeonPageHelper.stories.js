export default {
	title: 'Organisms/Helpers/Dungeon Phase Helper',
}

export const DungeonPhaseHelper = (argTypes) => ({
	props: Object.keys(argTypes),
	template: '<DungeonPhaseHelper v-bind="$props"/>'
}) 