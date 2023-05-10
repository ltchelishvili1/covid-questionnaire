import "@/main.css";

import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
import QuestionaireLayout from "@/components/layout/QuestionaireLayout.vue";
import BaseInput from "@/components/UI/BaseInput.vue";
import store from "@/store/index";
import IconBack from "@/components/icons/IconBack.vue";
import IconForward from "@/components/icons/IconForward.vue";
import "@/vee-validate/rules";

const app = createApp(App);

app.use(router);
app.use(store);

app.component("questionaire-layout", QuestionaireLayout);
app.component("base-input", BaseInput);
app.component("icon-back", IconBack);
app.component("icon-forward", IconForward);

app.mount("#app");
