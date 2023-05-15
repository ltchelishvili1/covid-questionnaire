export default {
  setInputValue(state, { key, value }) {
    state.covidPoliticData[key] = value;
  },

  setCovidPoliticValidation(state, { isValid }) {
    console.log(state)
    state.covidPoliticData.covidPoliticIsValid = isValid;
  },

};
