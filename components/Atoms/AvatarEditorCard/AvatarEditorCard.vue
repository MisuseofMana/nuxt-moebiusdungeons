<template>
<template>
    <v-card class="m-2">
        <div class="text-uppercase mb-2">{{editType}}</div>
        <div class="d-flex justify-content-between align-items-center">
            <v-button>
                -
            </v-button>
                <span class="tiny text-uppercase mx-2">ITEM {{selected}}</span>
            <v-button>
                +
            </v-button>
        </div>
    </-card>
</template>

<script>
    export default {
        prop: {
            editType: {
                type: String,
                default: 'body'
            }
        },
        data() {
            return {
                selected: 0,
            }
        },
    }
</script>

<style scoped>
.widthSet {
    width:200px;
}
</style>
</template>

<script>
    export default {
        name:'MettleGauge',
        props: {
            mettleType: {
                type: String,
                default: 'swordsman'
            },
            totalMettle: {
                type: Number,
                default: 3
            },
            availableMettle: {
                type: Number,
                default: 1
            },
        }
    }
</script>

<style lang="scss" scoped>
.grayscale {
    filter: saturate(0);
}
</style>