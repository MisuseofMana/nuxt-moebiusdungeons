<template>
  <v-container>
    <v-row>
      <v-col cols="7">
        <v-row no-gutters class="d-flex flex-wrap">
          <v-col cols="6" v-for="(items, index) in characterJSON" :key="items.name + index">
            <AvatarEditorCard
              :editType="items.name"
              :selected="items.selected"
              :index="index"
            />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="5" class="d-flex justify-center align-center">
        <AvatarCanvas :canvasSize="300"/>
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