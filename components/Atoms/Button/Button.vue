<template>
    <v-btn
        block
        :disabled="disabled"
        :color="color"
    >
        {{ text }}
    </v-btn>
</template>

<script>
    export default {
        props: {
            text: {
                type: String,
                default: 'Default',
            },
            disabled: {
                type: Boolean,
                default: false,
            },
            color: {
                type: String,
                default: 'primary'
            }

        }
    }
</script>

<style lang="scss" scoped>

</style>