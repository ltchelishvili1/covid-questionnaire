<template>
  <questionaire-layout link="/vaccinated" :page="4">
    <template v-slot:form>
      <covid-politic-form></covid-politic-form>
    </template>
    <template v-slot:icon>
      <transition name="red-heart" mode="out-in">
        <div
          v-if="redHeart"
          class="translate-x-[300px] translate-y-[90px] w-[196px] h-[173px]"
        >
          <icon-heart class="fill-[#F39494]"></icon-heart>
        </div>
      </transition>

      <div class="absolute top-[220px] ml-[200px]">
        <covid-politic-background></covid-politic-background>
      </div>
    </template>
  </questionaire-layout>
</template>

<script>
import CovidPoliticBackground from "@/assets/images/CovidPoliticBackground.vue";
import QuestionaireLayout from "@/components/layout/QuestionaireLayout.vue";
import CovidPoliticForm from "@/components/covid-politic/Form.vue";
import IconHeart from "@/components/icons/IconHeart.vue";

import { useStore } from "vuex";
import { useForm } from "vee-validate";
import { useRouter } from "vue-router";
import { onMounted, provide, ref } from "vue";

export default {
  components: {
    CovidPoliticBackground,
    QuestionaireLayout,
    CovidPoliticForm,
    IconHeart,
  },

  setup() {
    const store = useStore();
    const router = useRouter();
    const redHeart = ref(false);

    const { handleSubmit } = useForm();

    const onSubmit = handleSubmit(async () => {
      redHeart.value = false;

      store.commit("covidPolitic/setCovidPoliticValidation", {
        isValid: true,
      });

      try {
        const status = await store.dispatch("covidPolitic/sendRequest");
        if (status === 201) {
          router.push({ name: "thank-you" });
        } else {
          alert("An error occurred. Please try again.");
        }
      } catch (error) {
        alert(error);
      }
    });

    provide("submitForm", onSubmit);

    onMounted(() => {
      store.commit("covidPolitic/setCovidPoliticValidation", {
        isValid: false,
      });
      redHeart.value = true;
    });

    return {
      submitForm: onSubmit,
      redHeart,
    };
  },
};
</script>

<style scoped>
@import "@/utils/animations/styles/covid-politic.css";
</style>
