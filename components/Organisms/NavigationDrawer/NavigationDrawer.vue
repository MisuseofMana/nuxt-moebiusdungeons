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
          <v-icon @click.stop="drawer = !drawer">mdi</v-icon>
        </v-list-item-icon>

      </v-list-item>
      </v-row>
    </v-container>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list-item>
        <v-list-item-avatar>
          User Icon
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title class="text-uppercase">{{ username }}</v-list-item-title>
        </v-list-item-content>

        <v-list-item-icon>
          <v-icon @click.stop="drawer = !drawer">mdi</v-icon>
        </v-list-item-icon>

      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-sheet>
</template>

<script>
    export default {
        name:'NavigationDrawer',
        data() {
          return {
            drawer: null,
            items: [
          { title: 'Home', icon: 'mdi-view-dashboard' },
          { title: 'About', icon: 'mdi-forum' },
        ],
          }
        },
        props: {
            username:{
                type: String,
                default:'Wanderer',
            },
            height:{
                type: Number,
                default:100,
            },
            src:{
                type: 'string',
                default:'monster',
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>