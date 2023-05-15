export default {
  getCovidStatusValidation(state) {
    return state.covidStatusData.covidStatusIsValid;
  },
  getHadAntibodyTestValue(state) {
    return state.covidStatusData.had_antibody_test;
  },
  getHadCovidValue(state) {
    return state.covidStatusData.had_covid;
  },
};
