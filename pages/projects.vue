<template v-cloak>
  <Head>
    <Title>Проекты</Title>
  </Head>
  <video autoplay muted loop id="video-bg" class="blur-md">
    <source src="~/assets/videos/chain-25380.mp4" type="video/mp4" />
  </video>
  <section>
    <HeaderForComponent>
      Посмотри на мои <span class="gradient-text">Проекты</span>
    </HeaderForComponent>
    <div
      class="flex items-center justify-between mb-10 max-lg:flex-col max-lg:items-start"
    >
      <p class="text-2xl max-lg:mb-5">
        Это все проекты, сделанные за весь период моего программирования
      </p>
      <div class="max-lg:w-full">
        <div class="relative">
          <div
            class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
          >
            <Icon name="ic:outline-search" size="1.5em" />
          </div>
          <input
            type="search"
            class="block w-full p-4 pl-10 text-sm border border-gray-300 rounded-lg text-white bg-[#161513]"
            @input="searchProjects()"
            v-model="query"
            placeholder="Название проекта"
          />
        </div>
      </div>
    </div>
    <article
      v-if="projects.length > 0"
      data-aos="fade-up"
      class="bg-[#161513] flex items-center justify-between gap-10 flex-wrap p-10 gradient-border"
    >
      <ProjectsProject
        class="mx-auto"
        v-for="project in projects"
        :key="project.id"
        :project="project"
      ></ProjectsProject>
    </article>
    <div v-else class="text-center" data-aos="fade-left">
      <h1 class="text-3xl mb-10">К сожалению, сейчас у меня нет этого проекта ☹️</h1>
      <UIServicesButton @click="(query = ''), searchProjects()"
        >ОЧИСТИТЬ ПОИСК</UIServicesButton
      >
    </div>
  </section>
</template>

<script setup lang="ts">
import { useProjectsStore } from "../store/projects";
const storeProjects = useProjectsStore();

let projects = ref<Array<Project>>([]);
let query = ref("");

function searchProjects() {
  if (query.value !== "") {
    projects.value = projects.value.filter((project) =>
      project.title.toLowerCase().includes(query.value.trim().toLowerCase())
    );
  } else {
    projects.value = storeProjects.getProjects;
  }
}

onMounted(async () => {
  projects.value = storeProjects.getProjects;
});
</script>

<style scoped></style>
