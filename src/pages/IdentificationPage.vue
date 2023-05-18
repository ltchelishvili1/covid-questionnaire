<template>
  <questionaire-layout link="/home" :page="1">
    <template v-slot:form>
      <identification-form></identification-form>
    </template>
    <template v-slot:icon>
      <transition name="yellow-box" mode="out-in">
        <div
          v-if="showBox"
          class="translate-x-[230px] translate-y-[150px] h-[75px] w-[625px] bg-[#D6D16E]"
        ></div>
      </transition>

      <div class="absolute top-[120px] ml-[100px]">
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
import {  provide, onMounted , ref} from "vue";

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
    const showBox = ref(false);



    const onSubmit = handleSubmit(() => {
      showBox.value = false;

      setTimeout(() => {
        store.commit("identification/setIdentificationValidation", {
        isValid: true,
      });
      router.push({ name: "covid-status" });
      }, 500);
   
    });

    provide("submitForm", onSubmit);

    onMounted(() => {
      showBox.value = true;
      store.commit("identification/setIdentificationValidation", {
        isValid: false,
      });
    });

    return {
      showBox,
    };
  },
};
</script>

<style scoped>
@import '@/utils/animations/styles/identification.css'
</style>
