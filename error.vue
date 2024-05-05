<template>
  <video autoplay muted loop id="video-bg">
    <source src="~/assets/videos/computer-27876.mp4" />
  </video>
  <div
    class="backdrop-blur-xl text-center font-bold w-screen h-screen flex items-center justify-center flex-col"
  >
    <h1 class="text-5xl mb-10">{{ error?.message }}</h1>
    <UIMainButton @click="handleError">Go to Home</UIMainButton>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  error: Object,
});
const handleError = () => clearError({ redirect: "/" });
</script>
