import "@/main.css";

import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store/index";
import "@/config/vee-validate/rules";
import "@/config/vee-validate/messages";

const app = createApp(App);

app.use(router);
app.use(store);


app.mount("#app");
