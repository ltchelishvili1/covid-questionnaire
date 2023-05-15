import mutations from "@/store/modules/covid-status/mutations.js";
import getters from "@/store/modules/covid-status/getters.js";

export default {
  namespaced: true,
  state() {
    return {
      vaccinatedData: {
        vaccinatedIsValid: false,
        had_vaccine: null,
        vaccination_stage: null,
      },
    };
  },
  mutations,
  getters,
};
