export default {
	title: 'Organisms/Debug Bar',
}

export const DebugBar = (argTypes) => ({
	props: Object.keys(argTypes),
	template: '<DebugBar v-bind="$props"/>'
}) 