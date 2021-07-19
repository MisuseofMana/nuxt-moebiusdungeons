<template>
    <v-card class="ma-2 pa-2">
        <div class="d-flex justify-space-between align-center">
            <v-btn><v-icon>mdi-minus</v-icon></v-btn>
            <span class="tiny text-uppercase mx-2">{{ editType}}: {{selected}}</span>
            <v-btn><v-icon>mdi-plus</v-icon></v-btn>
        </div>
    </v-card>
</template>

<script>
    export default {
        name: 'AvatarEditorCard',
        props: {
            editType: {
                type: String,
                default: 'body'
            },
            selected: {
                type: Number,
                default: 0
            }
        },
    }
</script>

<style scoped>
.widthSet {
    width:200px;
}
</style>