import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import colors from 'vuetify/es5/util/colors';
import App from './App';
import router from './router';
import { store } from './store'

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

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});
