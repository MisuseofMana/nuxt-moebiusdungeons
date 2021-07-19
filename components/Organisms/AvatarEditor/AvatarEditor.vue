<template>
  <v-container>
    <v-row>
      <v-col cols="8">
        <v-row class="d-flex flex-wrap">
          <v-col cols="6" v-for="(items, index) in characterJSON" :key="items.name + index">
            <AvatarEditorCard
              :editType="items.name.replace('-', ' ')"
              :selected="items.which"
            />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="4">
        <AvatarCanvas />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

    export default {
        name:'AvatarEditor',
        data() {
          return {
            
          }
        },
        computed: {
          ...mapState('avatarCanvas', [
            'characterJSON'
          ])
        }
    }
</script>

<style lang="scss" scoped>

</style>