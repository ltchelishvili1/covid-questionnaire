import mutations from "@/store/modules/vaccinated/mutations.js";
import getters from "@/store/modules/vaccinated/getters.js";

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
