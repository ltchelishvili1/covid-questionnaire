export default {
  setInputValue(state, { key, value }) {
    state.covidStatusData[key] = value;
  },

  setCovidPoliticValidation(state, { isValid }) {
    state.covidPoliticData.covidStatusIsValid = isValid;
  },

};
