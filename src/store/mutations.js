export default {
  setInputValue(state, { key, value }) {
    state.requestData[key] = value;
  },

  setIdentificationValidation(state) {
    state.requestData.identificationIsValid = true;
  },
  setIdentificationValidationFalse(state) {
    state.requestData.identificationIsValid = false;
  },
};
