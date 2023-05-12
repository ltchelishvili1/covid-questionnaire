export default {
  setInputValue(state, { key, value }) {
    console.log(state);
    state.identificationData[key] = value;
  },

  setIdentificationValidation(state, { isValid }) {
    state.identificationData.identificationIsValid = isValid;
  },
};
