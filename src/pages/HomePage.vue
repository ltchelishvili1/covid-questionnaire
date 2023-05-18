<template>
  <section class="grid items-center justify-center h-screen">
    <div class="flex flex-col items-center justify-center">
      <transition name="redberry-icon" mode="out-in">
        <div
          v-if="showIcon"
          class="absolute -translate-y-[100px] bg-light-gray z-10 p-12 w-[200px] p-[10px] z-100"
        >
          <icon-redberry></icon-redberry>
        </div>
      </transition>
      <button
        @click="onClick"
        class="font-bold text-3xl mb-[200px] mt-[101px] cursor-pointer translate-y-[100px]"
      >
        <transition name="title">
          <div v-if="showText">
            კითხვარის
            <span class="flex items-center justify-center">დაწყება</span>
          </div>
        </transition>
      </button>
    </div>
  </section>
</template>

<script>
import IconRedberry from "@/components/icons/IconRedberry.vue";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

export default {
  components: {
    IconRedberry,
  },
  setup() {
    const showIcon = ref(false);
    const showText = ref(false);

    const router = useRouter();

    const onClick = () => {
      showIcon.value = false;
      setTimeout(() => {
        router.push({ name: "identification" });
      }, 500);
    };

    onMounted(() => {
      showIcon.value = true;
      showText.value = true;
    });

    return {
      showIcon,
      showText,
      onClick,
    };
  },
};
</script>

<style scoped>
button:hover {
  transition: all 0.3s ease-out;
  text-shadow: 2px 0px 0px #eaeaea, 3px 0px 0px #000000af;
}
</style>

<style scoped>
@import "@/utils/animations/styles/home-page.css";
</style>
