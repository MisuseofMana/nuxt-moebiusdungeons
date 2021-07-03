export default {
    title: 'Organisms/Shop Item Bar',
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
  
  export const ShopItemBar = (argTypes) => ({
    props: Object.keys(argTypes),
    template: '<ShopItemBar v-bind="$props"/>'
  }) 