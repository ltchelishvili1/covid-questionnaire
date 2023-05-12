import mutations from "@/store/modules/identification/mutations.js";
import getters from "@/store/modules/identification/getters.js";

export default {
  namespaced: true,
  state() {
    return {
      identificationData: {
        identificationIsValid: false,
        first_name: null,
        last_name: null,
        email: null,
      },
    };
  },
  mutations,
  getters,
};
