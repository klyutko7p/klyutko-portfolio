<template>
  <article data-aos="fade-up">
    <div
      class="max-w-md h-[400px] relative rounded-lg shadow-2xl bg-[#1f1e1b] border-gray-700"
    >
        <img
          class="rounded-t-lg"
          :src="project.image"
          alt=""
        />
      <div class="p-5">
          <h5
            class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            {{ project.title }}
          </h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {{ project.description }}
        </p>
        <a
          :href="project.link"
          target="_blank"
          class="absolute bottom-2 underline gradient-text font-bold text-2xl"
        >
          LINK
        </a>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
const router = useRouter();

defineProps({
  project: { type: Object as PropType<Project>, required: true },
});
</script>

<style scoped></style>
