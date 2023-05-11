<template>
  <main class="mx-[200px] pt-[94px]">
    <div class="flex justify-between">
      <icon-name></icon-name>
      <p class="font-bold text-[40px]">
        <span>{{ page }}</span
        >/4
      </p>
    </div>
    <div class="h-[2px] w-full bg-[#232323]"></div>
    <div class="flex w-full pt-[42px]">
      <div class="w-3/5">
        <slot name="form"></slot>
      </div>
      <div class="w-full">
        <slot name="icon"></slot>
      </div>
    </div>
    <div class="absolute flex left-1/2 bottom-[100px]">
      <router-link :to="link" class="mr-[60px]">
        <icon-back v-if="page !== 1"></icon-back>
      </router-link>
      <button :onclick="submitForm" class="ml-[60px]">
        <icon-forward></icon-forward>
      </button>
    </div>
  </main>
</template>
<script>
import IconName from "@/components/icons/IconName.vue";
import IconBack from "@/components/icons/IconBack.vue";
import IconForward from "@/components/icons/IconForward.vue";

export default {
  components: {
    IconName,
    IconBack,
    IconForward,
  },
  props: {
    page: {
      type: Number,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    submitForm: {
      type: Function,
      required: true,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
  },
};
</script>
