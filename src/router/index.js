import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const routes = [
  {
    path: "/",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/opiniones",
    component: () => import("../views/Opiniones.vue")
  },
  {
    path: "/admin",
    component: () => import("../views/Administracion.vue")
  },
  {
    path: "/admin/:id",
    name: 'editar',
    component: () => import("../views/Editar.vue"),
    props: true
  },
  {
    path: "*",
    component: () => import("../views/NotFound.vue")
  }
]

const router = new Router({
  mode: "history",
  routes
});
export default router;