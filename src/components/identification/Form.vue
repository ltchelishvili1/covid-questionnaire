<template>
  <form @submit.prevent="submitForm">
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
  </form>
</template>

<script>
import BaseInput from "@/components/UI/BaseInput.vue";

export default {
  components: {
    BaseInput,
  },
  props: {
    submitForm: {
      type: Function,
      required: true,
    },
  },
};
</script>
