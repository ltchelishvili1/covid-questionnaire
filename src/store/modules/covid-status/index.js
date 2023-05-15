import mutations from "@/store/modules/covid-status/mutations.js";
import getters from "@/store/modules/covid-status/getters.js";

export default {
  namespaced: true,
  state() {
    return {
      covidStatusData: {
        covidStatusIsValid: false,
        had_covid: null,
        had_antibody_test: null,
        covid_sickness_date: null,
        antibodies: {
          test_date: null,
          number: null,
        },
      },
    };
  },
  mutations,
  getters,
};
