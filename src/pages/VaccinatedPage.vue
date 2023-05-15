<template>
  <questionaire-layout link="/covid-status" :page="3">
    <template v-slot:form>
      <vaccinated-form
        :iAmWaiting="iAmWaiting"
        :hadVaccine="hadVaccine"
        :vaccinationStage="vaccinationStage"
      ></vaccinated-form>
    </template>
    <template v-slot:icon>
      <div class="absolute top-[200px] ml-[140px]">
        <vaccinated-background></vaccinated-background>
      </div>
    </template>
  </questionaire-layout>
</template>

<script>
import QuestionaireLayout from "@/components/layout/QuestionaireLayout.vue";
import { useForm } from "vee-validate";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { onMounted, computed, ref, watch, provide } from "vue";
import VaccinatedBackground from "@/assets/images/VaccinatedBackground.vue";
import VaccinatedForm from "@/components/vaccinated/Form.vue";

export default {
  components: {
    QuestionaireLayout,
    VaccinatedBackground,
    VaccinatedForm,
  },

  setup() {
    const { handleSubmit } = useForm();
    const router = useRouter();
    const store = useStore();
    const hadVaccine = computed(
      () => store.getters["vaccinated/getHadVaccineValue"]
    );
    const vaccinationState = computed(
      () => store.getters["vaccinated/getVaccinationStageValue"]
    );

    const iAmWaiting = computed(
      () => store.getters["vaccinated/getAmWaitingValue"]
    );

    const hadVaccineRef = ref(hadVaccine.value);
    const vaccinationStageRef = ref(vaccinationState.value);
    const iAmWaitingRef = ref(iAmWaiting.value);

    const checkHadVaccine = computed(() => hadVaccineRef.value);
    const checkVaccintionStage = computed(() => vaccinationStageRef.value);
    const checkIAmWaiting = computed(() => iAmWaitingRef.value);

    const onSubmit = handleSubmit(() => {
      store.commit("vaccinated/setVaccinationValidation", { isValid: true });
    });

    provide("submitForm", onSubmit);
    watch(hadVaccine, (newValue) => {
      hadVaccineRef.value = newValue;
    });

    watch(vaccinationState, (newValue) => {
      vaccinationStageRef.value = newValue;
    });

    watch(iAmWaiting, (newValue) => {
      iAmWaitingRef.value = newValue;
    });

    onMounted(() => {
      store.commit("vaccinated/setVaccinationValidation", { isValid: false });
    });

    return {
      submitForm: onSubmit,
      hadVaccine: checkHadVaccine,
      vaccinationStage: checkVaccintionStage,
      iAmWaiting: checkIAmWaiting,
    };
  },
};
</script>
