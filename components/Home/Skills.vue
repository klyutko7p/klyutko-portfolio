<template>
  <article>
    <HeaderForComponent data-aos="fade-right">Что я знаю.</HeaderForComponent>
    <article
      class="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 gap-10"
    >
      <div
        v-for="skill in skills"
        class="gradient-border text-center bg-[#1C1C22] p-3"
        data-aos="slide-up"
      >
        <Icon :name="skill.icon" size="4em" />
        <h1 class="mt-5 font-bold text-2xl max-md:text-xl">{{ skill.name }}</h1>
      </div>
    </article>
  </article>
</template>

<script setup lang="ts">
import { useSkillsStore } from "../../store/skills";

const storeSkills = useSkillsStore();
let skills = ref<Array<Skill>>([]);

onMounted(() => {
  skills.value = storeSkills.getSkills;
});
</script>
