export default {
  setInputValue(state, { key, value }) {
    state.vaccinatedData[key] = value;
  },

  setCovidStatusValidation(state, { isValid }) {
    state.vaccinatedData.vaccinatedIsValid = isValid;
  },
};
