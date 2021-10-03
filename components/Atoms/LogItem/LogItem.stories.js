export default {
	title: 'Atoms/Log Item',
	argTypes: {
		logItems: {
			control:{
				type: 'array',
				default: ['something', 'else', 'here']
			}
		},
	}
}
  
export const LogItem = () => '<LogItem v-bind="$props"/>'