<template>
    <v-progress-linear value="15">
    </v-progress-linear>
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