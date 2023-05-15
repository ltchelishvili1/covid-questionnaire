<template>
  <questionaire-layout link="/identification" :page="2">
    <template v-slot:form>
      <covid-status-form
        :hadCovid="hadCovid"
        :checkHadAntibody="checkHadAntibody"
      ></covid-status-form>
    </template>
    <template v-slot:icon>
      <had-covid-background></had-covid-background>
    </template>
  </questionaire-layout>
</template>

<script>
import { useStore } from "vuex";
import { useForm } from "vee-validate";
import { useRouter } from "vue-router";
import { onMounted, computed, ref, watch, provide } from "vue";

import hadCovidBackground from "@/assets/images/hadCovidBackground.vue";
import QuestionaireLayout from "@/components/layout/QuestionaireLayout.vue";
import CovidStatusForm from "@/components/covid-status/Form.vue";

export default {
  components: {
    hadCovidBackground,
    QuestionaireLayout,
    CovidStatusForm,
  },

  setup() {
    const store = useStore();
    const router = useRouter();
    const hadCovid = computed(
      () => store.getters["covidStatus/getHadCovidValue"]
    );
    const hadAntibodyTest = computed(
      () => store.getters["covidStatus/getHadAntibodyTestValue"]
    );

    const hadCovidRef = ref(hadCovid.value);
    const hadAntibodyRef = ref(hadAntibodyTest.value);

    const { handleSubmit } = useForm();

    const checkHadCovid = computed(() => hadCovidRef.value === "yes");
    const checkHadAntibody = computed(() => hadAntibodyRef.value);

    const onSubmit = handleSubmit(() => {
      store.commit("covidStatus/setCovidStatusValidation", { isValid: true });
      router.push({ name: "vaccinated" });
    });

    provide("submitForm", onSubmit);

    onMounted(() => {
      store.commit("covidStatus/setCovidStatusValidation", { isValid: false });
    });

    watch(hadCovid, (newValue) => {
      hadCovidRef.value = newValue;
    });

    watch(hadAntibodyTest, (newValue) => {
      hadAntibodyRef.value = newValue;
    });

    return {
      submitForm: onSubmit,
      hadCovid: checkHadCovid,
      checkHadAntibody,
    };
  },
};
</script>
