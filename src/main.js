import Vue from "vue";
import "jquery/dist/jquery.js"
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
