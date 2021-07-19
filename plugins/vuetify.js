import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue'
import Vuetify, {VApp} from 'vuetify'

Vue.use(Vuetify, {
    VApp,
})

const opts = {
    icons: {
        iconfont: 'mdi', // default - only for display purposes
      },
}

export default new Vuetify(opts)