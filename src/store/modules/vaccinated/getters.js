export default {
  getVaccinatedValidation(state) {
    return state.vaccinatedData.vaccinatedIsValid;
  },
  getVaccinationStageValue(state) {
    return state.vaccinatedData.vaccination_stage;
  },

  getHadVaccineValue(state) {
    return state.vaccinatedData.had_vaccine;
  },
  getVaccinationStageValue(state) {
    return state.vaccinatedData.vaccination_stage;
  },
  getAmWaitingValue(state) {
    return state.vaccinatedData.i_am_waiting;
  },
};
