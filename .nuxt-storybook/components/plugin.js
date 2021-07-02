import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Button: () => import('../..\\components\\Atoms\\Button\\Button.vue' /* webpackChunkName: "components/button" */).then(c => wrapFunctional(c.default || c)),
  Coin: () => import('../..\\components\\Atoms\\Coin\\Coin.vue' /* webpackChunkName: "components/coin" */).then(c => wrapFunctional(c.default || c)),
  ImageContainer: () => import('../..\\components\\Atoms\\Image\\ImageContainer.vue' /* webpackChunkName: "components/image-container" */).then(c => wrapFunctional(c.default || c)),
  InputField: () => import('../..\\components\\Atoms\\InputField\\InputField.vue' /* webpackChunkName: "components/input-field" */).then(c => wrapFunctional(c.default || c)),
  ContestBar: () => import('../..\\components\\Atoms\\ContestBar\\ContestBar.vue' /* webpackChunkName: "components/contest-bar" */).then(c => wrapFunctional(c.default || c)),
  Tooltip: () => import('../..\\components\\Atoms\\Tooltip\\Tooltip.vue' /* webpackChunkName: "components/tooltip" */).then(c => wrapFunctional(c.default || c)),
  SceneHeading: () => import('../..\\components\\Organisms\\SceneHeading\\SceneHeading.vue' /* webpackChunkName: "components/scene-heading" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
