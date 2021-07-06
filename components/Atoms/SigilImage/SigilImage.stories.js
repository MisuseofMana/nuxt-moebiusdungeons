export default {
    title: 'Atoms/Sigil Image',
    argTypes: {
      src: {
        control:{
          type: 'select',
          options: ['monster', 'player', 'shopkeep', 'traveler'],
        },
        defaultValue: 'monster'
      },
    }
  }

  export const SigilImage = (argTypes) => ({
    props: Object.keys(argTypes),
    template: '<SigilImage v-bind="$props"/>'
  }) 