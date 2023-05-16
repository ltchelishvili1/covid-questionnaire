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
import { ref, onBeforeMount } from "vue";
import { useRouter } from "vue-router";

export default {
  components: {
    IconRedberry,
  },
  setup() {
    const showIcon = ref(false);
    const showText = ref(false);

    const router = useRouter();

    onBeforeMount(() => {
      setTimeout(() => {
        showIcon.value = true;
      }, 100);

      setTimeout(() => {
        showText.value = true;
      }, 1000);
    });

    const onClick = () => {
      showIcon.value = false;
      setTimeout(() => {
        router.push({ name: "identification" });
      }, 500);
    };

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
.redberry-icon-enter-from {
  width: 5500px;
}

.redberry-icon-leave-to {
  transform: translate(100px, -150px);
}

.redberry-icon-enter-active {
  transition: all 0.5s ease-out;
}

.redberry-icon-leave-active {
  transition: all 0.5s ease-in;
}

.redberry-icon-enter-to,
.redberry-icon-leave-from {
  scale: 1;
  width: 200px;
}

.title-enter-from,
.title-leave-to {
  transform: translateY(-200px);
  opacity: 0;
}

.title-enter-active {
  transition: all 0.5s ease-out;
}

.title-leave-active {
  transition: all 0.5s ease-in;
}

.title-enter-to,
.title-leave-from {
  transform: translateY(0);
  opacity: 1;
}
</style>
