import Home from "../pages/Home.vue";
import LogIn from "../pages/LogIn.vue";
import SignUp from "../pages/SignUp.vue";

import { createRouter, createWebHistory } from "vue-router";
import { userStore } from "../stores/user";

const routes = [
  { path: "/", component: LogIn },
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    component: LogIn,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUp,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

router.beforeEach((to, from, next) => {
  const user = userStore();
  console.log(to);
  if (to.name === "home" && user.user === null) {
    next("/login");
  } else {
    next();
  }
});
export default router;
