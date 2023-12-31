import { createStore } from "vuex";
import IdentificationModule from "@/store/modules/identification/index";
import CovidStatusModule from "@/store/modules/covid-status/index";
import VaccinatedModule from "@/store/modules/vaccinated/index";
import CovidPoliticModule from "@/store/modules/covid-politic/index";

const store = createStore({
  modules: {
    identification: IdentificationModule,
    covidStatus: CovidStatusModule,
    vaccinated: VaccinatedModule,
    covidPolitic: CovidPoliticModule,
  },
});

store.subscribe((mutation, state) => {
  localStorage.setItem("vuex-state", JSON.stringify(state));
});

const localStorageState = localStorage.getItem("vuex-state");
if (localStorageState) {
  store.replaceState(JSON.parse(localStorageState));
}

export default store;
