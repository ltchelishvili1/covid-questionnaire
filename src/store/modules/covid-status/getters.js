export default {
  getCovidStatusValidation(state) {
    return state.covidStatusData.covidStatusIsValid;
  },
  getHadAntibodyTestValue(state) {
    return state.covidStatusData.covidStatusIsValid.had_antibody_test;
  },
};
