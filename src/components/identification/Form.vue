<template>
  <Form @submit="submitForm">
    <base-input
      title="სახელი"
      rules="required|minLength:2,სახელი"
      name="first_name"
      placeholder="იოსებ"
    ></base-input>
    <base-input
      title="გვარი"
      rules="required|minLength:2,გვარი"
      name="last_name"
      placeholder="ჯუღაშვილი"
    ></base-input>
    <base-input
      title="მეილი"
      rules="required|emailRedberry"
      name="email"
      placeholder="fbi@redberry.ge"
      type="email"
    ></base-input>

    <button class="absolute right-[50%] bottom-[9%] translate-x-[140px]">
      <icon-forward></icon-forward>
    </button>
  </Form>
</template>

<script>
import BaseInput from "@/components/UI/inputs/BaseInput.vue";
import IconForward from "@/components/icons/IconForward.vue";
import { Form } from "vee-validate";
import { inject } from "vue";

export default {
  components: {
    BaseInput,
    IconForward,
    Form,
  },
  setup() {
    return {
      submitForm: inject("submitForm"),
    };
  },
};
</script>
