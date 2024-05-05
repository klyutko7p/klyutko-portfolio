<template>
  <article data-aos="fade-up">
    <div class="max-w-md max-sm:h-[350px] h-[400px]  relative rounded-lg shadow-2xl bg-[#1f1e1b] border-gray-700">
      <a :href="project.link">
        <img class="rounded-t-lg h-[220px] w-full" :src="project.image" alt="" />
      </a>
      <div class="p-5">
        <h5 class="mb-2 max-w-[500px] text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {{ project.title }}
        </h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {{ project.description }}
        </p>
        <a :href="project.link" target="_blank" class="absolute bottom-2 underline gradient-text font-bold text-2xl">
          ССЫЛКА 
        </a>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
defineProps({
  project: { type: Object as PropType<Project>, required: true },
})
</script>

<style scoped></style>
