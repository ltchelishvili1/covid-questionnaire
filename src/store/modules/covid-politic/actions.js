import store from "@/store/index";
export default {
  async sendRequest() {
    const storeToSend = {
      ...store.state.identification.identificationData,
      ...store.state.covidStatus.covidStatusData,
      ...store.state.vaccinated.vaccinatedData,
      ...store.state.covidPolitic.covidPoliticData,
      number_of_days_from_office: parseInt(
        store.state.covidPolitic.covidPoliticData.number_of_days_from_office
      ),

      had_vaccine:
        store.state.vaccinated.vaccinatedData.had_vaccine === "yes"
          ? true
          : false,
    };

    if (storeToSend.had_covid === "yes") {
      storeToSend.had_antibody_test =
        storeToSend.had_antibody_test === "yes" ? true : false;
    }

    if (storeToSend.tell_us_your_opinion_about_us === null) {
      delete storeToSend.tell_us_your_opinion_about_us;
    }

    if (storeToSend.what_about_meetings_in_live === null) {
      delete storeToSend.what_about_meetings_in_live;
    }
    if (storeToSend.iAmWaiting === null) {
      delete storeToSend.iAmWaiting;
    }

    try {
      const response = await fetch("https://covid19.devtest.ge/api/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(storeToSend),
      });

      if (!response.ok) {
        throw new Error("Request failed with status " + response.status);
      }
      return response.status;
    } catch (error) {
      throw new Error(error.message);
    }
  },
};
