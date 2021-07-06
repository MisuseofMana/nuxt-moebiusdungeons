export default {
    title: 'Organisms/Stat Block',
    argTypes: {
      attackType: {
        control:{
          type: 'select',
          options: ['physical', 'magical']
        },
        defaultValue: 'physical'
      },
      armorType: {
        control:{
          type: 'select',
          options: ['physical', 'magical']
        },
        defaultValue: 'physical'
      },
      attack: {
        control:{
          type: 'number',
        },
        defaultValue: 10
      },
      armor: {
        control:{
          type: 'number',
        },
        defaultValue: 10
      },
      health: {
        control:{
          type: 'number',
        },
        defaultValue: 10
      },
      coins: {
        control:{
          type: 'number',
        },
        defaultValue: 10
      },
    },
  }
  
  
  export const StatBlock = (argTypes) => ({
    props: Object.keys(argTypes),
    template: `<StatBlock  v-bind="$props"/>`,
  })