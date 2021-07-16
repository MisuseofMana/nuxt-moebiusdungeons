import clericItems from '@/mocks/items/clericItems.mock.js'

export default {
    title: 'Molecules/Shop Item Bar',
    argTypes: {
      items: {
        control:{
          type: 'select',
          options: clericItems,
        },
        defaultValue: clericItems['minorHeal']
      },
    }
  }
  
  export const ShopItemBar = (argTypes) => ({
    props: Object.keys(argTypes),
    template: '<ShopItemBar v-bind="$props"/>'
  }) 