<template>
  <v-app>
    <v-navigation-drawer temporary fixed app v-model="sideNav">
      <v-list dense>
        <v-list-tile v-for="item in menuItems" :key="item.text" router :to="item.link">
          <v-list-tile-action>
            <v-icon left>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{item.text}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed app dark class="primary">
      <v-toolbar-side-icon @click.stop="sideNav = !sideNav" class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title><router-link to="/" tag="span" style="cursor:pointer">Dev Meetups</router-link></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="item in menuItems" :key="item.text" :to="item.link">
          <v-icon left>{{item.icon}}</v-icon>
          {{item.text}}</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
 
      <router-view></router-view>

    </v-content>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        sideNav: false
      }
    },
    computed: {
      menuItems () {
        let menuItems = [
          { icon: 'face', text: 'Sign up', link: '/signup' },
          { icon: 'lock_open', text: 'Sign in', link: '/signin' }
        ]
        if (this.userIsAuthenticated) {
          menuItems = [
            { icon: 'supervisor_account', text: 'View Meetups', link: '/meetups' },
            { icon: 'room', text: 'Organise a Meetup', link: '/meetups/new' },
            { icon: 'person', text: 'Profile', link: '/profile' }
          ]
        }
        return menuItems
      },
      userIsAuthenticated () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      }
    },
    name: 'App'
  }
</script>
