import mutations from "@/store/modules/covid-politic/mutations.js";
import getters from "@/store/modules/covid-politic/getters.js";
import actions from "@/store/modules/covid-politic/actions.js";

export default {
  namespaced: true,
  state() {
    return {
      covidPoliticData: {
        covidPoliticIsValid: false,
        number_of_days_from_office: null,
        non_formal_meetings: null,
        what_about_meetings_in_live: null,
        tell_us_your_opinion_about_us: null,
      },
    };
  },
  mutations,
  getters,
  actions,
};
