import { createStore } from "vuex";
import IdentificationModule from "./modules/identification/index";

const store = createStore({
  modules: {
    identification: IdentificationModule,
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
