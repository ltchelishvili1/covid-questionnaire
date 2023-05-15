<template>
  <questionaire-layout link="/vaccinated" :page="4">
    <template v-slot:form>
      <covid-politic-form></covid-politic-form>
    </template>
    <template v-slot:icon>
      <div class="ml-[133px]">
        <covid-politic-background></covid-politic-background>
      </div>
    </template>
  </questionaire-layout>
</template>

<script>
import CovidPoliticBackground from "@/assets/images/CovidPoliticBackground.vue";
import QuestionaireLayout from "@/components/layout/QuestionaireLayout.vue";
import CovidPoliticForm from "@/components/covid-politic/Form.vue";

import { useStore } from "vuex";
import { useForm } from "vee-validate";
import { useRouter } from "vue-router";
import { onMounted, provide } from "vue";

export default {
  components: {
    CovidPoliticBackground,
    QuestionaireLayout,
    CovidPoliticForm,
  },

  setup() {
    const store = useStore();
    const router = useRouter();

    const { handleSubmit } = useForm();

    const onSubmit = handleSubmit(() => {
      store.commit("covidPolitic/setCovidPoliticValidation", { isValid: true });
      //   store.dispatch("covidPolitic/sendRequest");
      // router.push({ name: "thankyou" });
    });

    provide("submitForm", onSubmit);

    onMounted(() => {
      store.commit("covidPolitic/setCovidPoliticValidation", {
        isValid: false,
      });
    });

    return {
      submitForm: onSubmit,
    };
  },
};
</script>
