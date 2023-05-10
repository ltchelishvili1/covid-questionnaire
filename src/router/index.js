import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import IdentificationPage from '@/pages/IdentificationPage.vue'

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
  ],
});

export default router;
