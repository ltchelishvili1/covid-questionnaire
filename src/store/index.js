import { createStore } from "vuex";
import IdentificationModule from "@/store/modules/identification/index";
import checkCovidModule from "@/store/modules/identification/index";

const store = createStore({
  modules: {
    identification: IdentificationModule,
    checkCovid: checkCovidModule,
  },
});

store.subscribe((mutation, state) => {
  localStorage.setItem("vuex-state", JSON.stringify(state));
});

const localStorageState = localStorage.getItem("vuex-state");
if (localStorageState) {
  store.replaceState(JSON.parse(localStorageState));
}

export default store;
