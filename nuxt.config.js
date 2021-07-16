export default {
  buildModules: [
    // Simple usage
    '@nuxtjs/vuetify',
  ],
  target: 'static',
  components: {
    dirs: [
      '@/components/Atoms',
      '@/components/Molecules',
      '@/components/Organisms',
    ]
  },
  css: [
    '@/assets/css/transitions.css'
  ],
  plugins: ['@/plugins/vuetify.js'],
  head: {
    title: 'Moebius Dungeons',
      htmlAttrs: {
          lang: 'en',
      },
      meta: [
          {name: 'viewport', content: 'width=device-width, intial-scale=1'}
      ],
      link: [
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Frijole|Oswald&display=swap'}
      ]
  },
  storybook: {
    port:7001,
    decorators: [`<v-app><story/></v-app>`],
    addons: [
      '@storybook/addon-controls'
    ]
  },
  vuetify: {
    customVariables: ['@/assets/variables.scss'],
    treeShake: true,
    defaultAssets: false,
  }
}