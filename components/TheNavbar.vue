<template>
  <header>
    <nav class="flex items-center justify-between">
      <div>
        <img
          src="~/assets/images/klyutko-logo.svg"
          @click="$router.push('/')"
          class="cursor-pointer w-full h-16"
          alt=""
        />
      </div>
      <div class="max-lg:hidden">
        <NuxtLink
          active-class="gradient-text"
          to="/"
          class="font-['Jost'] gradient-color cursor-pointer duration-300 hover:scale-110 font-medium mr-5 text-lg"
        >
          Домой
        </NuxtLink>
        <NuxtLink
          active-class="gradient-text"
          to="/services"
          class="font-['Jost'] gradient-color cursor-pointer duration-300 hover:scale-110 font-medium mr-5 text-lg"
        >
          Услуги
        </NuxtLink>
        <NuxtLink
          active-class="gradient-text"
          to="/projects"
          class="font-['Jost'] gradient-color cursor-pointer duration-300 hover:scale-110 font-medium mr-5 text-lg"
        >
          Проекты
        </NuxtLink>
      </div>
      <div class="max-lg:hidden">
        <a href="https://t.me/klyutko7p" target="_blank">
          <UIMainButton class="duration-200 animate-pulse hover:animate-none"
            >НАПИШИ МНЕ</UIMainButton
          >
        </a>
      </div>
      <div
        class="max-lg:block hidden space-y-2"
        v-if="!isActivatedBurgerMenu"
        @click="isActivatedBurgerMenu = true"
        data-aos="flip-down"
      >
        <div class="w-8 h-1 bg-white"></div>
        <div class="w-8 h-1 bg-white"></div>
        <div class="w-8 h-1 bg-white"></div>
      </div>
      <div v-if="isActivatedBurgerMenu">
        <div class="max-lg:block hidden space-y-2">
          <h1
            @click="isActivatedBurgerMenu = false"
            data-aos="flip-down"
            class="text-5xl"
          >
            X
          </h1>
        </div>
        <div
          data-aos="fade-right"
          class="fixed bg-[#161513] top-0 gradient-border-r left-0 h-full w-1/2 z-10 flex flex-col items-center justify-center gap-16 pl-10 p-5"
        >
          <img
            src="~/assets/images/klyutko-logo.svg"
            @click="$router.push('/'), isActivatedBurgerMenu = false"
            class="cursor-pointer w-full h-16"
            alt=""
          />
          <NuxtLink
            active-class="gradient-text"
            to="/"
            class="font-['Bai_Jamjuree'] gradient-color cursor-pointer duration-300 hover:scale-110 font-medium mr-5 text-4xl"
            @click="isActivatedBurgerMenu = false"
          >
            Home
          </NuxtLink>
          <NuxtLink
            active-class="gradient-text"
            to="/services"
            class="font-['Bai_Jamjuree'] gradient-color cursor-pointer duration-300 hover:scale-110 font-medium mr-5 text-4xl"
            @click="isActivatedBurgerMenu = false"
          >
            Services
          </NuxtLink>
          <NuxtLink
            active-class="gradient-text"
            to="/projects"
            class="font-['Bai_Jamjuree'] gradient-color cursor-pointer duration-300 hover:scale-110 font-medium mr-5 text-4xl"
            @click="isActivatedBurgerMenu = false"
          >
            Projects
          </NuxtLink>
          <h1 class="uppercase mr-10">© developed by Daniel klyutko</h1>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
let isActivatedBurgerMenu = ref(false);

</script>

<style scoped></style>
