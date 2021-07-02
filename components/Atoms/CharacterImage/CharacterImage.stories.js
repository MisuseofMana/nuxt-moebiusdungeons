import characters from '@/components/Atoms/CharacterImage/CharacterImage.mock.js'

export default {
  title: 'Atoms/Character Image',
  argTypes: {
    who: {
      control:{
        type: 'select',
        options: characters,
      },
      defaultValue: characters['swordsman']
    },
    rarity: {
      control:{
        type: 'select',
        options: ['normal', 'virulent', 'fearsome', 'bloodless', 'flawless'],
      },
      defaultValue: 'normal'
    }
  }
}

export const CharacterImage = (argTypes) => ({
  props: Object.keys(argTypes),
  template: '<CharacterImage v-bind="$props"/>'
}) 