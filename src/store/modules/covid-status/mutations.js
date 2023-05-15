export default {
  setInputValue(state, { key, value }) {
    if (key === "number" || key === "test_date") {
      state.covidStatusData.antibodies = state.covidStatusData.antibodies || {};
      state.covidStatusData.antibodies[key] = value;
    } else {
      state.covidStatusData[key] = value;
    }
  },
  

  setCovidStatusValidation(state, { isValid }) {
    state.covidStatusData.covidStatusIsValid = isValid;
  },

  clearStateIfHadCovidFalse(state) {
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
