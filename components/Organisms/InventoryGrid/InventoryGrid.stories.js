export default {
    title: 'Organisms/Inventory Grid',
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
  
  export const InventoryGrid = (argTypes) => ({
    props: Object.keys(argTypes),
    template: '<InventoryGrid v-bind="$props"/>'
  }) 