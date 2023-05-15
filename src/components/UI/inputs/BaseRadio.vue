<template>
  <div>
    <div class="mt-2">
      <Field
        class="w-[23px] h-[23px] accent-[#232323]"
        :value="value"
        :id="name"
        :name="name"
        type="radio"
        :rules="rules"
        v-model="inputData"
      />

      <label class="absolute ml-4 -mt-[3px] font-normal text-xl">{{
        placeholder
      }}</label>
      <div v-if="isLastInput" class="mt-[6px]">
        <ErrorMessage class="text-red-500 ml-4" :name="name" />
      </div>
    </div>
  </div>
</template>

<script>
import { Field, ErrorMessage } from "vee-validate";
import { ref, watch, onMounted, computed } from "vue";
import { useStore } from "vuex";

export default {
  props: {
    page: {
      type: String,
      required: true,
      default: "identification",
    },
    rules: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: false,
    },
    value: {
      type: String,
      required: false,
    },
    lastInput: {
      type: Boolean,
      required: false,
    },
  },

  components: {
    Field,
    ErrorMessage,
  },

  setup({ page, name, lastInput }) {
    const inputData = ref("");
    const store = useStore();
    const pageData = page + "Data";

    const checkHadVaccine = computed(
      () => name === "number" || name === "test_date"
    );

    const storedValue = computed(() => {
      if (checkHadVaccine.value) {
        return store.covidStatus.covidStatusData[name];
      } else {
        return store.state[page][pageData][name];
      }
    });

    const isLastInput = computed(() => lastInput === true);

    watch(storedValue, (newValue) => {
      inputData.value = newValue;
    });

    watch(inputData, (newValue) => {
      const key = name;
      const value = newValue;

      const hadNotCovid = computed(() => {
        return key === "had_covid" && value !== "yes";
      });

      const hadAntibodyTest = computed(() => {
        return key === "had_antibody_test" && value === "yes";
      });

      const hadNotAntibodyTest = computed(() => {
        return key === "had_antibody_test" && value === "no";
      });

      const hadVaccine = computed(() => {
        return key === "had_vaccine" && value === "yes";
      });

      const hadNotVaccine = computed(() => {
        return key === "had_vaccine" && value === "no";
      });

      if (hadNotCovid.value) {
        store.commit("covidStatus/clearStateIfHadCovidFalse");
      }

      if (hadAntibodyTest.value) {
        store.commit("covidStatus/clearStateIfHadCovidAndAntibodyTest");
      }

      if (hadNotAntibodyTest.value) {
        store.commit("covidStatus/clearStateIfHadCovidAndNotAntibodyTest");
      }

      if (hadVaccine.value) {
        store.commit("vaccinated/clearStateIfHadVaccine");
      }

      if (hadNotVaccine.value) {
        store.commit("vaccinated/clearStateIfHadNotVaccine");
      }

      store.commit(`${page}/setInputValue`, { key, value });
    });

    onMounted(() => {
      if (storedValue.value) {
        inputData.value = storedValue.value;
      }
    });

    return {
      inputData,
      isLastInput,
    };
  },
};
</script>
