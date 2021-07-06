import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Button: () => import('../..\\components\\Atoms\\Button\\Button.vue' /* webpackChunkName: "components/button" */).then(c => wrapFunctional(c.default || c)),
  Coin: () => import('../..\\components\\Atoms\\Coin\\Coin.vue' /* webpackChunkName: "components/coin" */).then(c => wrapFunctional(c.default || c)),
  ContestBar: () => import('../..\\components\\Atoms\\ContestBar\\ContestBar.vue' /* webpackChunkName: "components/contest-bar" */).then(c => wrapFunctional(c.default || c)),
  InputField: () => import('../..\\components\\Atoms\\InputField\\InputField.vue' /* webpackChunkName: "components/input-field" */).then(c => wrapFunctional(c.default || c)),
  MettleGauge: () => import('../..\\components\\Atoms\\MettleGauge\\MettleGauge.vue' /* webpackChunkName: "components/mettle-gauge" */).then(c => wrapFunctional(c.default || c)),
  SigilImage: () => import('../..\\components\\Atoms\\SigilImage\\SigilImage.vue' /* webpackChunkName: "components/sigil-image" */).then(c => wrapFunctional(c.default || c)),
  DamageReadout: () => import('../..\\components\\Atoms\\DamageReadout\\DamageReadout.vue' /* webpackChunkName: "components/damage-readout" */).then(c => wrapFunctional(c.default || c)),
  Tooltip: () => import('../..\\components\\Atoms\\Tooltip\\Tooltip.vue' /* webpackChunkName: "components/tooltip" */).then(c => wrapFunctional(c.default || c)),
  CharacterImageMock: () => import('../..\\components\\Organisms\\CharacterImage\\CharacterImage.mock.js' /* webpackChunkName: "components/character-image-mock" */).then(c => wrapFunctional(c.default || c)),
  CharacterImage: () => import('../..\\components\\Organisms\\CharacterImage\\CharacterImage.vue' /* webpackChunkName: "components/character-image" */).then(c => wrapFunctional(c.default || c)),
  InventoryGrid: () => import('../..\\components\\Organisms\\InventoryGrid\\InventoryGrid.vue' /* webpackChunkName: "components/inventory-grid" */).then(c => wrapFunctional(c.default || c)),
  SceneHeading: () => import('../..\\components\\Organisms\\SceneHeading\\SceneHeading.vue' /* webpackChunkName: "components/scene-heading" */).then(c => wrapFunctional(c.default || c)),
  ShopItemBar: () => import('../..\\components\\Organisms\\ShopItemBar\\ShopItemBar.vue' /* webpackChunkName: "components/shop-item-bar" */).then(c => wrapFunctional(c.default || c)),
  StatBlock: () => import('../..\\components\\Organisms\\StatBlock\\StatBlock.vue' /* webpackChunkName: "components/stat-block" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
