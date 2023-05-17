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
        <icon-heart :class="[isSubmitted ? 'fill-[#232323]' : 'fill-[#F39494]']"></icon-heart>
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
import { onMounted, provide, ref, onBeforeMount } from "vue";

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
    const isSubmitted = ref(false);

    onBeforeMount(() => {
      setTimeout(() => {
        redHeart.value = true;
      }, 10);
    });

    const { handleSubmit } = useForm();

    const onSubmit = handleSubmit(async () => {
      redHeart.value = false;
   

      setTimeout(async () => {
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
      }, 100);


  
    });

    provide("submitForm", onSubmit);

    onMounted(() => {
      store.commit("covidPolitic/setCovidPoliticValidation", {
        isValid: false,
      });
    });

    return {
      submitForm: onSubmit,
      redHeart,
      isSubmitted
    };
  },
};
</script>

<style scoped>
.red-heart-enter-from {
  transform: translate(270px, 40px);
}

.red-heart-leave-to {
  transform: translate(-2200px, -1500px);
  width: 5500px;
}

.red-heart-enter-active {
  transition: all 0.5s ease-out;
}

.red-heart-leave-active {
  transition: all 0.5s ease-in;
}

.red-heart-enter-to,
.red-heart-leave-from {
  width: 196px;
}

</style>
