export default {
    title: 'Molecules/Scene Heading',
    argTypes: {
      phase: {
        control:{
          type: 'select',
          options: ['Shop Phase', 'Dungeon Phase', 'Shop Select Phase', 'Travel Phase'],
        },
        defaultValue: 'Dungeon Phase'
      },
    }
  }
  
  export const SceneHeading = (argTypes) => ({
    props: Object.keys(argTypes),
    template: '<SceneHeading v-bind="$props"/>'
  }) 