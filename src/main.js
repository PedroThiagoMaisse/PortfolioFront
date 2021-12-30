import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./assets/vuetify";
import CountryFlag from "vue-country-flag";

Vue.config.productionTip = false;

new Vue({
  components: {
    CountryFlag,
  },
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
