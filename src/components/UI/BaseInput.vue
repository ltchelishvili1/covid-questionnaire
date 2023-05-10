<template>
  <div>
    <div v-if="type === 'textarea'" class="mb-[47px]">
      <div v-if="title" class="mb-2">
        <label :for="name" class="font-semibold text-2xl">{{ title }}*</label>
      </div>
      <Field
        class="w-full h-field bg-transparent border border-[#232323] p-4 mt-[12px]"
        :id="name"
        :name="name"
        as="textarea"
        rows="6"
        :rules="rules"
        v-model="inputData"
      />
      <div class="mt-[6px]">
        <ErrorMessage class="text-red-500 ml-4" :name="name" />
      </div>
    </div>



    <div v-else-if="type === 'radio'" class="mt-2">
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
      <div v-if="lastInput === true" class="mt-[6px]">
        <ErrorMessage class="text-red-500 ml-4" :name="name" />
      </div>
    </div>

    <div v-else class="mb-[47px]">
      <div v-if="title" class="mb-2">
        <label :for="name" class="font-semibold text-2xl">{{ title }}*</label>
      </div>
      <Field
        class="w-full h-field bg-transparent border border-[#232323] p-4 mt-[12px]"
        :id="name"
        :name="name"
        :type="type || 'text'"
        :placeholder="placeholder || name"
        :rules="rules"
        v-model="inputData"
      />
      <div class="mt-[6px]">
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
  props: [
    "title",
    "rules",
    "name",
    "placeholder",
    "type",
    "value",
    "lastInput",
  ],
  components: {
    Field,
    ErrorMessage,
  },

  setup(props) {
    const inputData = ref("");
    const store = useStore();

    const storedValue = computed(() => {
      if (props.name === "number" || props.name === "test_date") {
        return store.state.identification.identificationData.antibodies[
          props.name
        ];
      } else {
        return store.state.identification.identificationData[props.name];
      }
    });

    watch(storedValue, (newValue) => {
      inputData.value = newValue;
    });

    watch(inputData, (newValue) => {
      const key = props.name;
      const value = newValue;
      if (key === "had_covid" && value !== "yes") {
        store.commit("identification/clearStateIfHadCovidFalse");
      }

      if (key === "had_antibody_test" && value === "yes") {
        store.commit("identification/clearStateIfHadCovidAndAntibodyTest");
      }

      if (key === "had_antibody_test" && value === "no") {
        store.commit("identification/clearStateIfHadCovidAndNotAntibodyTest");
      }

      if (key === "had_vaccine" && value === "no") {
        store.commit("identification/clearStateIfIsNotVaccinated");
      }
      if (key === "had_vaccine" && value === "yes") {
        store.commit("identification/clearStateIfIsVaccinated");
      }

      store.commit("identification/setInputValue", { key, value });
    });

    onMounted(() => {
      if (storedValue.value) {
        inputData.value = storedValue.value;
      }
    });

    return {
      inputData,
    };
  },
};
</script>

<!-- 

    
 -->
