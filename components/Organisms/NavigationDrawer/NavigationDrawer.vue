<template>
     <v-sheet
    height="400"
    class="overflow-hidden"
    style="position: relative;"
  >
    <v-container>
      <v-row
        align="start"
        justify="start"
      >
        <v-list-item>
        <v-list-item-avatar>
          User Icon
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title class="text-uppercase">{{ username }}</v-list-item-title>
        </v-list-item-content>

        <v-list-item-icon>
          <v-icon @click.stop="drawer = !drawer">mdi-cog</v-icon>
        </v-list-item-icon>

      </v-list-item>
      </v-row>
    </v-container>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      STUFF GOES HERE
    </v-navigation-drawer>
  </v-sheet>
</template>

<script>
    export default {
        name:'NavigationDrawer',
        data() {
          return {
            drawer: null,
          }
        },
        props: {
            username:{
                type: String,
                default:'Wanderer',
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>