export default {
    title: 'Organisms/Avatar Editor',
    argTypes: {
    }
  }

  export const AvatarEditor = (argTypes) => ({
    props: Object.keys(argTypes),
    template: '<AvatarEditor v-bind="$props"/>'
  }) 