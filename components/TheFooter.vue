<template>
  <footer class="mb-3">
    <nav
      class="flex items-center justify-between border-t-2 border-gray-500 py-10 max-lg:flex-col"
    >
      <div>
        <img
          src="~/assets/images/klyutko-logo.svg"
          @click="$router.push('/')"
          class="cursor-pointer w-full h-16"
          alt=""
        />
      </div>
      <div class="max-lg:mt-5 max-md:flex max-md:flex-col text-center">
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
    </nav>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped></style>
