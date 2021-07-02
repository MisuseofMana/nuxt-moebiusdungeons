<template>
<v-card class="size" elevation="0">
    <v-img 
    v-bind="$attrs"
    :src="require('@/assets/images/ui/coin.png')"
    />
    <v-overlay opacity="0" :absolute="true" :value="true" class="white--text text-h4">
        <div class="shadow">
            {{ wealth }}
        </div>
    </v-overlay>
</v-card>
</template>

<script>
    export default {
        name: 'Coin',
        props: {
            wealth: {
                type: Number,
                default: 0,
            }
        },
    }
</script>

<style lang="scss" scoped>
.size {
    width:75px;
    height:75px;
}

.shadow {
    text-shadow:black -1px 0px 5px;
}

</style>