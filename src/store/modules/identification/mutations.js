export default {
  setInputValue(state, { key, value }) {
    console.log(state)
    state.identificationData[key] = value;
  },

  setIdentificationValidation(state) {
    state.identificationData.identificationIsValid = true;
  },
  setIdentificationValidationFalse(state) {
    console.log(state)
    state.identificationData.identificationIsValid = false;
  },
};
