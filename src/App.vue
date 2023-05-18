<template>
  <base-background>
    <router-view v-slot="{ Component }">
      <component :is="Component"></component>
    </router-view>
  </base-background>
</template>

<script>
import BaseBackground from "@/components/UI/BaseBackground.vue";

export default {
  components: {
    BaseBackground,
  },
};
</script>

<style>
@font-face {
  font-family: 'bpg_arial';
  src: local('bpg_arial'),
  url('@/assets/font/bpg_arial.ttf')
}

body{
  font-family: 'bpg-arial';
}

</style>