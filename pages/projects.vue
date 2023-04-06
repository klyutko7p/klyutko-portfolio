<template v-cloak>
  <Head>
    <Title>Projects Page</Title>
  </Head>
  <section>
    <HeaderForComponent>
      Look at My <span class="gradient-text">Projects</span>
    </HeaderForComponent>
    <div class="flex items-center justify-between mb-10 max-lg:flex-col max-lg:items-start">
      <p class="text-2xl max-lg:mb-5">
        These are all projects made during the entire period of my programming
      </p>
      <div class="max-lg:w-full">
        <div class="relative">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Icon name="ic:outline-search" size="1.5em" />
          </div>
          <input type="search"
            class="block w-full p-4 pl-10 text-sm  border border-gray-300 rounded-lg text-white bg-[#161513]"
            @input="searchProjects()" v-model="query" placeholder="Title of Project" />
        </div>
      </div>
    </div>
    <article v-if="projects.length > 0" data-aos="fade-up"
      class="bg-[#161513] flex items-center justify-between gap-10 flex-wrap p-10 gradient-border">
      <ProjectsProject class="mx-auto" v-for="project in projects" :key="project.id" :project="project"></ProjectsProject>
    </article>
    <div v-else class="text-center" data-aos="fade-left">
      <h1 class="text-3xl mb-10">Sorry, I don't have this project now ☹️</h1>
      <UIServicesButton @click="query = '', searchProjects()">CLEAR SEARCH</UIServicesButton>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useProjectsStore } from '../store/projects'
const storeProjects = useProjectsStore()

let projects = ref<Array<Project>>([])
let query = ref("")

function searchProjects() {
  if (query.value !== "") {
    projects.value = projects.value.filter((project) =>
      project.title.toLowerCase().includes(query.value.trim().toLowerCase())
    )
  } else {
    projects.value = storeProjects.getProjects
  }
}

onMounted(async () => {
  projects.value = storeProjects.getProjects
});

</script>

<style scoped></style>
