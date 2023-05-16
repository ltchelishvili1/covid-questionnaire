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
import { ref, onBeforeMount } from "vue";
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

    onBeforeMount(() => {
      setTimeout(() => {
        showText.value = true;
      }, 300);
    });

    onBeforeMount(() => {
      setTimeout(() => {
        showIcon.value = true;
      }, 600);
    });

    return {
      showText,
      showIcon,
    };
  },
};
</script>

<style scoped>
.route-enter-from,
.route-leave-to {
  opacity: 0;
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-active {
  transition: all 0.3s ease-in;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
}

.thank-you-icon-big-enter-from {
  opacity: 0;
  transform: translate(100px, 100px);
}

.thank-you-icon-big-leave-to,
.thank-you-icon-small-leave-to {
  opacity: 0;
}

.thank-you-icon-big-enter-active,
.thank-you-icon-small-enter-active {
  transition: all 0.3s ease-out;
}

.thank-you-icon-small-enter-from {
  opacity: 0;
  transform: translate(-100px, -100px);
}
</style>
