<template v-cloak>
  <video autoplay muted loop id="video-bg" class="blur-md">
    <source src="~/assets/videos/video-bg-main.mp4" type="video/mp4" />
  </video>
  <section>
    <HeaderForComponent>
      Look at My <span class="gradient-text">Projects</span>
    </HeaderForComponent>
    <div class="flex items-center justify-between mb-10">
      <p class="text-2xl">
        These are all projects made during the entire period of my programming
      </p>
      <div>
          <div class="relative">
            <div
              class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
            >
            <Icon name="ic:outline-search" size="1.5em" />
            </div>
            <input
              type="search"
              id="default-search"
              class="block w-full p-4 pl-10 text-sm  border border-gray-300 rounded-lg text-white bg-[#161513]"
              @input="searchProjects()"
              v-model="query"
              placeholder="Title of Project"
              required
            />
          </div>
      </div>
    </div>
    <article v-if="projects.length > 0"
      class="bg-[#161513] flex items-center justify-between gap-10 flex-wrap p-10 gradient-border"
    >
      <ProjectsProject
        class="mx-auto"
        v-for="project in projects"
        :key="project.id"
        :project="project"
      ></ProjectsProject>
    </article>
    <div v-else class="text-center">
      <h1 class="text-3xl mb-10">Sorry, I don't have this project now ☹️</h1>
      <UIServicesButton @click="query = '', searchProjects()">CLEAR SEARCH</UIServicesButton>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useProjectsStore } from "../../store/projects";
const storeProject = useProjectsStore();

let projects = ref<Array<Project>>([]);
let query = ref("");

function searchProjects() {
  if (query.value !== "") {
    projects.value = projects.value.filter((project) =>
      project.title.toLowerCase().includes(query.value.trim().toLowerCase())
    );
  } else {
    projects.value = storeProject.getProjects;
  }
}

onMounted(async () => {
  projects.value = await storeProject.getProjects;
});

</script>

<style scoped></style>
