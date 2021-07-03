export default {
    title: 'Atoms/Mettle Gauge',
    argTypes: {
      mettleType: {
        control:{
          type: 'select',
          options: ['swordsman', 'mage', 'varlet'],
        },
        defaultValue: 'swordsman'
      },
      totalMettle: {
        control:{
          type: 'number',
        },
        defaultValue: 3
      },
      availableMettle: {
        control:{
          type: 'number',
        },
        defaultValue: 1
      },
    }
  }
  
  export const MettleGauge = (argTypes) => ({
    props: Object.keys(argTypes),
    template: `<MettleGauge  v-bind="$props"/>`,
  })