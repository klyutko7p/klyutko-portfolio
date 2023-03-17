<template>
  <video autoplay muted loop id="video-bg" class="blur-md">
    <source src="~/assets/videos/video-bg-main.mp4" type="video/mp4" />
  </video>
  <section>
    <HeaderForComponent>
      Look at My <span class="gradient-text">Projects</span>
    </HeaderForComponent>
    <p class="mb-10">
      These are all projects made during the entire period of my programming
    </p>
    <article
      class="bg-[#161513] flex items-center justify-between gap-10 flex-wrap p-10 gradient-border"
    >
      <ProjectsProject
        class="mx-auto"
        v-for="project in projects"
        :key="project.id"
        :project="project"
      ></ProjectsProject>
    </article>
  </section>
</template>

<script setup lang="ts">
import { useProjectsStore } from "../../store/projects";
const storeProject = useProjectsStore();

let projects = ref<Array<Project>>([]);

onMounted(() => {
  projects.value = storeProject.getProjects;
});
</script>

<style scoped></style>
