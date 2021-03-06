import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";

Vue.config.productionTip = false;

axios.defaults.baseURL =
process.env.VUE_APP_API_ENDPOINT;

store.dispatch('autoLogin');

Vue.filter('addComma', function(value){
  if (!value) return ''
  value = value.toLocaleString()
  return value.charAt(0).toUpperCase() + value.slice(1)
});

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
