<template>
    <v-text-field
        :label="label"
        :counter="counter"
        outlined
    ></v-text-field>
</template>

<script>
    export default {
        name:'InputField',
        props: {
            label: {
                type: String,
                default: 'Default',
            },
            counter: {
                type: Number,
                default: 15,
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>