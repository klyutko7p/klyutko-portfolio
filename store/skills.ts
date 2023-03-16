import { defineStore } from "pinia";

export const useSkillsStore = defineStore("skills", () => {
  let skills = ref([
    { name: "HTML 5", icon: "vscode-icons:file-type-html" },
    { name: "CSS 3", icon: "vscode-icons:file-type-css" },
    { name: "SCSS", icon: "vscode-icons:file-type-scss" },
    { name: "Tailwind CSS", icon: "vscode-icons:file-type-tailwind" },
    { name: "JavaScript ES6+", icon: "vscode-icons:file-type-js-official" },
    {
      name: "TypeScript",
      icon: "vscode-icons:file-type-typescript-official",
    },
    { name: "Vue 3", icon: "vscode-icons:file-type-vue" },
    { name: "Nuxt 3", icon: "vscode-icons:file-type-nuxt" },
    { name: "MySQL", icon: "vscode-icons:file-type-mysql" },
    { name: "Laravel/PHP", icon: "logos:laravel" },
    { name: "Figma", icon: "logos:figma" },
    { name: "Adobe Photoshop", icon: "logos:adobe-photoshop" },
  ]);

  const getSkills = computed(() => skills.value);

  return { getSkills };
});
