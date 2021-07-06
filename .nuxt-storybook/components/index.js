import { wrapFunctional } from './utils'

export { default as Button } from '../..\\components\\Atoms\\Button\\Button.vue'
export { default as Coin } from '../..\\components\\Atoms\\Coin\\Coin.vue'
export { default as ContestBar } from '../..\\components\\Atoms\\ContestBar\\ContestBar.vue'
export { default as InputField } from '../..\\components\\Atoms\\InputField\\InputField.vue'
export { default as MettleGauge } from '../..\\components\\Atoms\\MettleGauge\\MettleGauge.vue'
export { default as SigilImage } from '../..\\components\\Atoms\\SigilImage\\SigilImage.vue'
export { default as DamageReadout } from '../..\\components\\Atoms\\DamageReadout\\DamageReadout.vue'
export { default as Tooltip } from '../..\\components\\Atoms\\Tooltip\\Tooltip.vue'
export { default as CharacterImageMock } from '../..\\components\\Organisms\\CharacterImage\\CharacterImage.mock.js'
export { default as CharacterImage } from '../..\\components\\Organisms\\CharacterImage\\CharacterImage.vue'
export { default as InventoryGrid } from '../..\\components\\Organisms\\InventoryGrid\\InventoryGrid.vue'
export { default as SceneHeading } from '../..\\components\\Organisms\\SceneHeading\\SceneHeading.vue'
export { default as ShopItemBar } from '../..\\components\\Organisms\\ShopItemBar\\ShopItemBar.vue'
export { default as StatBlock } from '../..\\components\\Organisms\\StatBlock\\StatBlock.vue'

export const LazyButton = import('../..\\components\\Atoms\\Button\\Button.vue' /* webpackChunkName: "components/button" */).then(c => wrapFunctional(c.default || c))
export const LazyCoin = import('../..\\components\\Atoms\\Coin\\Coin.vue' /* webpackChunkName: "components/coin" */).then(c => wrapFunctional(c.default || c))
export const LazyContestBar = import('../..\\components\\Atoms\\ContestBar\\ContestBar.vue' /* webpackChunkName: "components/contest-bar" */).then(c => wrapFunctional(c.default || c))
export const LazyInputField = import('../..\\components\\Atoms\\InputField\\InputField.vue' /* webpackChunkName: "components/input-field" */).then(c => wrapFunctional(c.default || c))
export const LazyMettleGauge = import('../..\\components\\Atoms\\MettleGauge\\MettleGauge.vue' /* webpackChunkName: "components/mettle-gauge" */).then(c => wrapFunctional(c.default || c))
export const LazySigilImage = import('../..\\components\\Atoms\\SigilImage\\SigilImage.vue' /* webpackChunkName: "components/sigil-image" */).then(c => wrapFunctional(c.default || c))
export const LazyDamageReadout = import('../..\\components\\Atoms\\DamageReadout\\DamageReadout.vue' /* webpackChunkName: "components/damage-readout" */).then(c => wrapFunctional(c.default || c))
export const LazyTooltip = import('../..\\components\\Atoms\\Tooltip\\Tooltip.vue' /* webpackChunkName: "components/tooltip" */).then(c => wrapFunctional(c.default || c))
export const LazyCharacterImageMock = import('../..\\components\\Organisms\\CharacterImage\\CharacterImage.mock.js' /* webpackChunkName: "components/character-image-mock" */).then(c => wrapFunctional(c.default || c))
export const LazyCharacterImage = import('../..\\components\\Organisms\\CharacterImage\\CharacterImage.vue' /* webpackChunkName: "components/character-image" */).then(c => wrapFunctional(c.default || c))
export const LazyInventoryGrid = import('../..\\components\\Organisms\\InventoryGrid\\InventoryGrid.vue' /* webpackChunkName: "components/inventory-grid" */).then(c => wrapFunctional(c.default || c))
export const LazySceneHeading = import('../..\\components\\Organisms\\SceneHeading\\SceneHeading.vue' /* webpackChunkName: "components/scene-heading" */).then(c => wrapFunctional(c.default || c))
export const LazyShopItemBar = import('../..\\components\\Organisms\\ShopItemBar\\ShopItemBar.vue' /* webpackChunkName: "components/shop-item-bar" */).then(c => wrapFunctional(c.default || c))
export const LazyStatBlock = import('../..\\components\\Organisms\\StatBlock\\StatBlock.vue' /* webpackChunkName: "components/stat-block" */).then(c => wrapFunctional(c.default || c))
