import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import store from "@/store/index";
import IdentificationPage from "@/pages/IdentificationPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      name: "home",
      component: HomePage,
    },
    {
      path: "/identification",
      name: "identification",
      component: IdentificationPage,
    },
    {
      path: "/covid-status",
      name: "covid-status",
      component: null,
      beforeEnter: (_, _2, next) => {
        const isValid =
          store.getters["identification/getIdentificationValidation"];

        if (!isValid) {
          next("/identification");
        } else {
          next();
        }
      },
    },
  ],
});

export default router;
