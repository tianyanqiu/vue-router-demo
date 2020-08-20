/* eslint-disable comma-dangle */
/* eslint-disable quotes */
import Vue from "vue";
import router from "./router";
import APP from "./App";

new Vue({
  router,
  template: "<APP/>",
  components: { APP }
}).$mount("#app");
