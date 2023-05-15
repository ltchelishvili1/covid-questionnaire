export default {
  setInputValue(state, { key, value }) {
    state.identificationData[key] = value;
  },

  setIdentificationValidation(state, { isValid }) {
    state.identificationData.identificationIsValid = isValid;
  },
};
