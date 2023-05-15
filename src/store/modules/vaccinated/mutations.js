export default {
  setInputValue(state, { key, value }) {
    state.vaccinatedData[key] = value;
  },

  setVaccinationValidation(state, { isValid }) {
    state.vaccinatedData.vaccinatedIsValid = isValid;
  },

  clearStateIfHadVaccine(state) {
    delete state.vaccinatedData.i_am_waiting;
  },

  clearStateIfHadNotVaccine(state) {
    delete state.vaccinatedData.vaccination_stage;
  },

};
