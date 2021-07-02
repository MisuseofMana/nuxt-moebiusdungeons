<template>
    <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
            <v-btn
                color="primary"
                dark
                v-bind="attrs"
                v-on="on"
            >
                Hover for Tooltip
            </v-btn>
        </template>
        
        <div class="d-flex flex-column align-center">
            <div class="text-h6">
                {{ heading }}
            </div>

            <div class="text-body-2">
                {{ text }}
            </div>
        </div>
        
    </v-tooltip>
</template>

<script>
    export default {
        name:'Tooltip',
        props: {
            heading: {
                type: String,
                default: 'Heading',
            },
            text: {
                type: String,
                default: 'Text',
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>