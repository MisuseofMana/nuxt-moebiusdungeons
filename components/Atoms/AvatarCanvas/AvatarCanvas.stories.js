export default {
	title: 'Atoms/Avatar Canvas',
	argTypes: {
		editType: {
			control:{
				type: 'select',
				options: ['body', 'brows', 'clothes', 'ears', 'extras', 'eyes', 'hari-back', 'hair-front', 'mouth', 'nose'],
			},
			defaultValue: 'body'
		},
	}
}
  
export const AvatarCanvas = (argTypes) => ({
	props: Object.keys(argTypes),
	template: '<AvatarCanvas  v-bind="$props"/>',
})