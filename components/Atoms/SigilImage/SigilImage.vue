<template>
    <v-img 
    v-bind="$attrs"
    :src="require(`@/assets/images/sigils/${src}.png`)"
    :width="width"
    :height="height"
    :max-height="height"
    :max-width="width"
    />
</template>

<script>
    export default {
        name:'SigilImage',
        props: {
            width:{
                type: Number,
                default:100,
            },
            height:{
                type: Number,
                default:100,
            },
            src:{
                type: 'string',
                default:'monster',
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>