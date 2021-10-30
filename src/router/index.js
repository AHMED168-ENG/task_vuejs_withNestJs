import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue"
import login from "../views/Login.vue"
import logout from "../components/required/logout.vue"
import register from "../views/register.vue"
import profile from "../views/profile.vue"
import Edit from "../views/editProfile.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about/:id",
    name: "About",
    component : About,
  },
  {
    path: "/login",
    name: "login",
    component : login,
  },
  {
    path: "/register",
    name: "register",
    component : register,
  },
  {
    path: "/logout",
    name: "logout",
    component : logout,
  },
  {
    path: "/profile",
    name: "profile",
    component : profile,
  },
  {
    path: "/Edit",
    name: "edit",
    component : Edit,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
