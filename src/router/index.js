import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import IdentificationPage from "@/pages/IdentificationPage.vue";
import CovidStatusPage from "@/pages/CovidStatusPage.vue";
import VaccinatedPage from "@/pages/VaccinatedPage.vue";
import CovidPoliticPage from "@/pages/CovidPoliticPage.vue";

import {
  checkCovidStatusValidation,
  checkIdentificationValidation,
  checkVaccinatedValidation,
} from "@/utils/RouterUtils.js";

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
      component: CovidStatusPage,
      beforeEnter: checkIdentificationValidation,
    },
    {
      path: "/vaccinated",
      name: "vaccinated",
      component: VaccinatedPage,
      beforeEnter: checkCovidStatusValidation,
    },
    {
      path: "/covid-politic",
      name: "covid-politic",
      component: CovidPoliticPage,
      beforeEnter: checkVaccinatedValidation,
    },
  ],
});

export default router;
