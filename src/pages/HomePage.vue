<template>
  <section class="grid items-center justify-center h-screen">
    <div class="flex flex-col items-center justify-center">
      <icon-redberry></icon-redberry>
      <router-link
        to="#"
        class="font-bold text-3xl mb-[200px] mt-[101px] cursor-pointer"
      >
        კითხვარის <span class="flex items-center justify-center">დაწყება</span>
      </router-link>
    </div>
  </section>
</template>
<script>
import IconRedberry from "@/components/icons/IconRedberry.vue";
export default {
  components: {
    IconRedberry,
  },
};
</script>

<style scoped>
a:hover {
  transition: all 0.3s ease-out;
  text-shadow: 2px 0px 0px #eaeaea, 3px 0px 0px #000000af;
}
</style>
