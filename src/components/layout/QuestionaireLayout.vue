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
  </main>
</template>
<script>
import IconName from "../icons/IconName.vue";
export default {
  props: {
    page: {
      type: Number,
      required: true,
    },
  },
  components: {
    IconName,
  },
};
</script>
