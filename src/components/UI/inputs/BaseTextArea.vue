<template>
  <div>
    <div class="mb-[47px]">
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
    title: {
      type: String,
      required: false,
    },
    rules: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: true,
    },

    value: {
      type: String,
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
