<template>
  <video autoplay muted loop id="myVideo">
    <source src="~/assets/videos/video-bg-main.mp4" type="video/mp4" />
  </video>
  <section class="mb-10">
    <div class="text-center">
      <UIPhotoSwiper class="mb-10" />
      <h1 class="font-bold leading-normal text-6xl max-sm:text-4xl max-sm:leading-normal" data-aos="fade-right">
        <span class="gradient-text">Hello, I'm Daniel,</span> Front-End
        Developer based in Kazakhstan.
      </h1>
      <UIIcons class="my-5" data-aos="fade-up" />
    </div>
  </section>
  <section data-aos="fade-down">
    <h1 class="mb-10 gradient-text text-7xl font-bold">About me</h1>
    <HomeInfo data-aos="zoom-in" class="mb-32" />
    <HomeSkills class="mb-32" />
    <section class="grid grid-cols-2 gap-10 mb-10 max-lg:grid-cols-1">
      <HomeEducation data-aos="fade-right" />
      <HomeWork data-aos="fade-left" />
    </section>
  </section>
</template>

<script setup lang="ts"></script>
