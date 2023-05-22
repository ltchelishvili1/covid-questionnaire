<template>
  <div>
    <div class="mb-[47px]">
      <div>
        <Field
          class="w-full h-field bg-transparent border border-[#232323] p-4 mt-[12px]"
          :id="name"
          :name="name"
          type="text"
          :rules="rules"
          onfocus="(this.type = 'date')"
          v-model="inputData"
          :placeholder="placeholder"
        />

        <div class="mt-[6px]">
          <ErrorMessage class="text-red-500 ml-4" :name="name" />
        </div>
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
      required: false,
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
    type: {
      type: String,
      required: false,
    },
  },

  components: {
    Field,
    ErrorMessage,
  },

  setup({ page, name }) {
    const inputData = ref("");
    const store = useStore();
    const pageData = page + "Data";
    const showField = ref(false);

    const storedValue = computed(() => {
      if (name === "number" || name === "test_date") {
        return (
          store.state.covidStatus.covidStatusData.antibodies &&
          store.state.covidStatus.covidStatusData.antibodies[name]
        );
      } else {
        return store.state[page][pageData][name];
      }
    });

    watch(storedValue, (newValue) => {
      inputData.value = newValue;
    });

    watch(inputData, (newValue) => {
      const key = name;
      const value = newValue;

      store.commit(`${page}/setInputValue`, { key, value });
    });

    onMounted(() => {
      if (storedValue.value) {
        const [year, month, day] = storedValue.value.split("-");
        let newDate;
        if (year.length > 2) {
          newDate = `${day}-${month}-${year}`;
          inputData.value = newDate;
        } else {
          inputData.value = storedValue.value;
        }
      }
    });

    const toggleField = () => {
      showField.value = !showField.value;
    };

    return {
      inputData,
      toggleField,
      showField,
    };
  },
};
</script>
