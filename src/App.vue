<template>
  <v-app>
    <v-navigation-drawer fixed app v-model="sideNav">
      <v-list dense>
        <v-list-tile v-for="item in items" :key="item.text">
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
      <v-toolbar-side-icon @click.native.stop="sideNav = !sideNav" class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>Dev Meetups</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="item in items" :key="item.text">
          <v-icon left>{{item.icon}}</v-icon>
          {{item.text}}</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        sideNav: false,
        items: [
        { icon: 'supervisor_account', text: 'View Meetups' },
        { icon: 'room', text: 'Organise a Meetup' },
        { icon: 'person', text: 'Profile' },
        { icon: 'face', text:'Sign up'},
        { icon: 'lock_open', text: 'Sign in'}
        ]
      }
    },
    name: 'App',
  };
</script>
