<script setup>
import { computed, onMounted, onUnmounted, ref } from "vue";
import { useRoute, RouterView } from "vue-router";
import { useDeviceStore } from "./stores/device";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

const route = useRoute();
const device = useDeviceStore();
const isRWD = computed(() => {
  return device.deviceMode !== "deskTop" && route.name == "home";
});

onMounted(() => {
  device.resizeDevice();
  window.addEventListener("resize", device.resizeDevice);
});
onUnmounted(() => {
  window.removeEventListener("resize", device.resizeDevice);
});
</script>

<template>
  <nav class="container lg:order-first" :class="{ 'order-last': isRWD }">
    <Navbar />
  </nav>
  <main class="container grow lg:order-last" :class="{ 'order-first ': isRWD }">
    <RouterView />
  </main>
  <Footer class="fixed bottom-0"></Footer>
</template>

<style scoped></style>
