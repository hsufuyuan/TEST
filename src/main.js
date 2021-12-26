import Vue from "vue";
import App from "./App.vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import "./assets/custom.css";
import GAuth from "vue-google-oauth2";
//import GAuth from './plugins/gAuth'
import installElement from "./plugins/element/installElement.js";

const opts = {
  icons: {
    iconfont: "mdi"
  }
};
Vue.use(Vuetify);
Vue.use(installElement);

Vue.use(GAuth, {
  clientId:
    "909221758646-3k2bfrmt5vsln3kgdqhjtg9126n5pi2s.apps.googleusercontent.com",
  scope: "email",
  prompt: "consent",
  fetch_basic_profile: false
});
new Vue({
  vuetify: new Vuetify(opts),
  render: h => h(App)
}).$mount("#app");
