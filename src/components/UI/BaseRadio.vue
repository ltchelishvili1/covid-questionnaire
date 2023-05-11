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
      <div v-if="lastInput === true" class="mt-[6px]">
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

  setup(props) {
    const inputData = ref("");
    const store = useStore();

    const storedValue = computed(() => {
      console.log(store.state.identification);
      return store.state.identification.identificationData[props.name];
    });

    watch(storedValue, (newValue) => {
      inputData.value = newValue;
    });

    watch(inputData, (newValue) => {
      const key = props.name;
      const value = newValue;

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
