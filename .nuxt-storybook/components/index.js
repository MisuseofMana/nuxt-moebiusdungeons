import { wrapFunctional } from './utils'

export { default as Button } from '../..\\components\\Atoms\\Button\\Button.vue'
export { default as Coin } from '../..\\components\\Atoms\\Coin\\Coin.vue'
export { default as ImageContainer } from '../..\\components\\Atoms\\Image\\ImageContainer.vue'
export { default as InputField } from '../..\\components\\Atoms\\InputField\\InputField.vue'
export { default as ContestBar } from '../..\\components\\Atoms\\ContestBar\\ContestBar.vue'
export { default as Tooltip } from '../..\\components\\Atoms\\Tooltip\\Tooltip.vue'
export { default as SceneHeading } from '../..\\components\\Organisms\\SceneHeading\\SceneHeading.vue'

export const LazyButton = import('../..\\components\\Atoms\\Button\\Button.vue' /* webpackChunkName: "components/button" */).then(c => wrapFunctional(c.default || c))
export const LazyCoin = import('../..\\components\\Atoms\\Coin\\Coin.vue' /* webpackChunkName: "components/coin" */).then(c => wrapFunctional(c.default || c))
export const LazyImageContainer = import('../..\\components\\Atoms\\Image\\ImageContainer.vue' /* webpackChunkName: "components/image-container" */).then(c => wrapFunctional(c.default || c))
export const LazyInputField = import('../..\\components\\Atoms\\InputField\\InputField.vue' /* webpackChunkName: "components/input-field" */).then(c => wrapFunctional(c.default || c))
export const LazyContestBar = import('../..\\components\\Atoms\\ContestBar\\ContestBar.vue' /* webpackChunkName: "components/contest-bar" */).then(c => wrapFunctional(c.default || c))
export const LazyTooltip = import('../..\\components\\Atoms\\Tooltip\\Tooltip.vue' /* webpackChunkName: "components/tooltip" */).then(c => wrapFunctional(c.default || c))
export const LazySceneHeading = import('../..\\components\\Organisms\\SceneHeading\\SceneHeading.vue' /* webpackChunkName: "components/scene-heading" */).then(c => wrapFunctional(c.default || c))
