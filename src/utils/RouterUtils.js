import store from "@/store/index";
export const checkIdentificationValidation = (_, _2, next) => {
  const isValid = store.getters["identification/getIdentificationValidation"];

  if (!isValid) {
    next("/identification");
  } else {
    next();
  }
};

export const checkCovidStatusValidation = (_, _2, next) => {
  const isValid = store.getters["covidStatus/getCovidStatusValidation"];

  if (!isValid) {
    next("/covid-status");
  } else {
    next();
  }
}


export const checkVaccinatedValidation =  (_, _2, next) => {
  const isValid = store.getters["vaccinated/getVaccinatedValidation"];
  if (!isValid) {
    next("/vaccinated");
  } else {
    next();
  }
}