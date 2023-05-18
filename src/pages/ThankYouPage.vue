<template>
  <div class="h-screen w-full bg-[#232323] flex items-center justify-center">
    <div>
      <transition name="thank-you-icon-big" mode="out-in">
        <div v-if="showIcon">
          <icon-thank-you-big></icon-thank-you-big>
        </div>
      </transition>
      <transition name="route" mode="out-in">
        <p
          v-if="showText"
          class="font-bold text-[64px] text-white tracking-[0.24em]"
        >
          მადლობა
        </p>
      </transition>
      <transition name="thank-you-icon-small" mode="out-in">
        <div v-if="showIcon">
          <icon-thank-you-small></icon-thank-you-small></div
      ></transition>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import IconThankYouBig from "@/components/icons/IconThankYouBig.vue";
import IconThankYouSmall from "@/components/icons/IconThankYouSmall.vue";

export default {
  components: {
    IconThankYouBig,
    IconThankYouSmall,
  },
  setup() {
    const showText = ref(false);
    const showIcon = ref(false);

    onMounted(() => {
      showText.value = true;
      showIcon.value = true;
    });

    return {
      showText,
      showIcon,
    };
  },
};
</script>

<style scoped>
@import "@/utils/animations/styles/thank-you.css";
</style>
