import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'
import DateFilter from './filters/date'
import AlertCmp from './components/Shared/Alert.vue'

Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.filter('date', DateFilter)
Vue.component('app-alert', AlertCmp)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyCiXLQmVvQyJOVOvIZIWxsKd5-asWut0QI',
      authDomain: 'meetup-app-99e08.firebaseapp.com',
      databaseURL: 'https://meetup-app-99e08.firebaseio.com',
      projectId: 'meetup-app-99e08',
      storageBucket: 'meetup-app-99e08.appspot.com',
      messagingSenderId: '135071651927'
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
    this.$store.dispatch('loadMeetups')
  }
})
