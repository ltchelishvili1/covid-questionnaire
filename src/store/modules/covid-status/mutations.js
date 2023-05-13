export default {
  setInputValue(state, { key, value }) {
    state.covidStatusData[key] = value;
  },

  setCovidStatusValidation(state, { isValid }) {
    state.covidStatusData.covidStatusIsValid = isValid;
  },
  setEmptyAntibodies(state) {
    state.covidStatusData.antibodies.test_date = null;
  },

  clearStateIfHadCovidFalse(state) {
    delete state.covidStatusData.had_antibody_test;
    delete state.covidStatusData.antibodies;
    delete state.covidStatusData.covid_sickness_date;
  },
  clearStateIfHadCovidAndAntibodyTest(state) {
    delete state.covidStatusData.covid_sickness_date;
  },

  clearStateIfHadCovidAndNotAntibodyTest(state) {
    delete state.covidStatusData.antibodies;
  },
};
