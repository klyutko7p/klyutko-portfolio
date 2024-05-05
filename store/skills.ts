import { defineStore } from "pinia";

export const useSkillsStore = defineStore("skills", () => {
  let skills = ref([
    { name: "HTML 5", icon: "vscode-icons:file-type-html" },
    { name: "CSS 3", icon: "vscode-icons:file-type-css" },
    { name: "Tailwind CSS", icon: "vscode-icons:file-type-tailwind" },
    { name: "SASS/SCSS", icon: "vscode-icons:file-type-scss" },
    { name: "JavaScript ES6+", icon: "vscode-icons:file-type-js-official" },
    {
      name: "TypeScript",
      icon: "vscode-icons:file-type-typescript-official",
    },
    { name: "Vue 3", icon: "vscode-icons:file-type-vue" },
    { name: "Nuxt 3", icon: "vscode-icons:file-type-nuxt" },
    { name: "Pinia", icon: "logos:pinia" },
    { name: "Prisma", icon: "skill-icons:prisma" },
    { name: "Supabase", icon: "logos:supabase-icon" },
    { name: "С#/.Net", icon: "devicon:csharp" },
    { name: "Unity", icon: "skill-icons:unity-dark" },
    { name: "Python/Django", icon: "devicon:python" },
    { name: "MySQL", icon: "vscode-icons:file-type-mysql" },
    { name: "PostgreSQL", icon: "devicon:postgresql" },
    { name: "Laravel/PHP", icon: "logos:laravel" },
    { name: "Figma", icon: "logos:figma" },
    { name: "Adobe Photoshop", icon: "logos:adobe-photoshop" },
    { name: "Adobe Illustrator", icon: "logos:adobe-illustrator" },
  ]);

  const getSkills = computed(() => skills.value);

  return { getSkills };
});
