export default {
  getVaccinatedValidation(state) {
    return state.vaccinatedData.covidStatusIsValid;
  },
  getVaccinationStageValue(state) {
    return state.vaccinatedData.vaccination_stage;
  },

};
