export default {
  setInputValue(state, { key, value }) {
    state.covidPoliticData[key] = value;
  },

  setCovidPoliticValidation(state, { isValid }) {
    state.covidPoliticData.covidPoliticIsValid = isValid;
  },

};
