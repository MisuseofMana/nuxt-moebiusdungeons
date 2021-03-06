export default {
    title: 'Atoms/Avatar Editor Card',
    argTypes: {
      editType: {
        control:{
          type: 'select',
          options: ['body', 'brows', 'clothes', 'ears', 'extras', 'eyes', 'hari-back', 'hair-front', 'mouth', 'nose'],
        },
        defaultValue: 'body'
      },
      selected: {
        control:{
          type: 'number',
        },
        defaultValue: 0
      },
    }
  }
  
  export const AvatarEditorCard = (argTypes) => ({
    props: Object.keys(argTypes),
    template: `<AvatarEditorCard  v-bind="$props"/>`,
  })