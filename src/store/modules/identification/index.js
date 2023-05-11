import mutations from "./mutations.js";
import getters from "./getters.js";

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
