<template>
  <base-background>
    <router-view v-slot="{ Component }">
      <component :is="Component"></component>
    </router-view>
  </base-background>
</template>

<script>
import BaseBackground from "./components/UI/BaseBackground.vue";

export default {
  components: {
    BaseBackground,
  },
};
</script>
