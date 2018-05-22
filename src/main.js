import Vue from 'vue';
import Vuetify from 'vuetify';
import * as firebase from 'firebase';
import 'vuetify/dist/vuetify.min.css';
import colors from 'vuetify/es5/util/colors';
import App from './App';
import router from './router';
import { store } from './store';
import DateFilter from './filters/date';


Vue.use(Vuetify, {
  theme: {
    primary: colors.red.darken2,
    secondary: colors.grey.lighten1,
    accent: colors.red.accent2,
    error: colors.red.accent4,
    info: colors.blue.accent2,
    success: colors.green.lighten2,
    warning: colors.amber.darken2,
  },
});

Vue.filter('date', DateFilter);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCiXLQmVvQyJOVOvIZIWxsKd5-asWut0QI',
      authDomain: 'meetup-app-99e08.firebaseapp.com',
      databaseURL: 'https://meetup-app-99e08.firebaseio.com',
      projectId: 'meetup-app-99e08',
      storageBucket: 'meetup-app-99e08.appspot.com',
      messagingSenderId: '135071651927',
    });
  },
});
