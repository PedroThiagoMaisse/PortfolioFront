import Vue from "vue";
import VueRouter from "vue-router";
import basic from "../views/basic.vue";
import pConfig from "../components/pluginsConfig";

Vue.use(VueRouter);

let routes = [
  {
    path: "/",
    name: "Home",
    component: basic,
  },
];

const array = Object.keys(pConfig);

array.forEach((element) => {
  let obj = {};
  obj.path = "/" + element;
  obj.name = element;
  obj.component = () =>
    import(
      /* webpackChunkName: "about" */ "../components/plugins/" +
        element +
        "/main.vue"
    );
  routes.push(obj);
});

const router = new VueRouter({
  routes,
});

export default router;
