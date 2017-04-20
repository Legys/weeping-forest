import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import { routes } from "./routes";
import store from "./store/store";
import axios from "axios";

const port = process.env.PORT || 5000;
axios.defaults.baseURL = `http://localhost:${port}`;

Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  routes
});

new Vue({
  el: "#app",
  store,
  router,
  render: h => h(App)
});
