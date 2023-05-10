import { createStore } from "vuex";
import mutations from "./mutations.js";
import getters from "./getters.js";

const store = createStore({
  state() {
    return {
      requestData: {
        identificationIsValid: false,
        hadCovidIsValid: false,
        vaccinationIsValid: false,
        advicesIsValid: false,
        had_covid: null,
        first_name: null,
        last_name: null,
        email: null,
        had_antibody_test: null,
        had_vaccine: null,
        covid_sickness_date: null,
        vaccination_stage: null,
        non_formal_meetings: null,
        number_of_days_from_office: null,
        what_about_meetings_in_live: null,
        tell_us_your_opinion_about_us: null,
        antibodies: {
          test_date: null,
          number: null,
        },
      },
    };
  },
  mutations,
  getters,
});

store.subscribe((mutation, state) => {
  localStorage.setItem("vuex-state", JSON.stringify(state));
});

const localStorageState = localStorage.getItem("vuex-state");
if (localStorageState) {
  store.replaceState(JSON.parse(localStorageState));
}

export default store;
