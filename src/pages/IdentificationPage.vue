<template>
  <questionaire-layout link="/home" :page="1">
    <template v-slot:form>
      <identification-form></identification-form>
    </template>
    <template v-slot:icon>
      <div
        class="translate-x-[130px] translate-y-[150px] h-[75px] w-[625px] bg-[#D6D16E]"
      ></div>
      <div class="absolute top-[120px]">
        <identification-background></identification-background>
      </div>
    </template>
  </questionaire-layout>
</template>

<script>
import IdentificationBackground from "@/assets/images/IdentificationBackground.vue";
import IdentificationForm from "@/components/identification/Form.vue";
import QuestionaireLayout from "@/components/layout/QuestionaireLayout.vue";

import { useForm } from "vee-validate";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { onMounted, provide } from "vue";

export default {
  components: {
    IdentificationBackground,
    IdentificationForm,
    QuestionaireLayout,
  },

  setup() {
    const { handleSubmit } = useForm();
    const router = useRouter();
    const store = useStore();

    const disabled =
      store.getters["identification/getIdentificationValidation"] === false;

    const onSubmit = handleSubmit(() => {
      store.commit("identification/setIdentificationValidation", {
        isValid: true,
      });
      router.push({ name: "covid-status" });
    });

    provide("submitForm", onSubmit);

    onMounted(() => {
      store.commit("identification/setIdentificationValidation", {
        isValid: false,
      });
    });

    return {
      disabled: disabled,
    };
  },
};
</script>
