import { defineStore } from "pinia";

export const useProjectsStore = defineStore("projects", () => {
  let projects = ref([
    {
      id: 1,
      title: "ToDo App",
      description: "Simple todo-app to record your thoughts and tasks",
      link: "https://github.com/klyutko7p/todo-app",
      image:
        "https://user-images.githubusercontent.com/95645570/225997054-26a5b66b-2fb8-460e-9814-25d1a5da3037.png",
    },
    {
      id: 2,
      title: "Weather App",
      description:
        "An application where you can view in-depth information about the weather in your city",
      link: "https://github.com/klyutko7p/weather-app",
      image:
        "https://user-images.githubusercontent.com/95645570/226000720-3b21aaff-04a1-4e59-a3fa-304eaa66d1ac.png",
    },
    {
      id: 3,
      title: "Online Store",
      description:
        "Online store with products which can be filter, search and buy.",
      link: "https://github.com/klyutko7p/nuxt-shop",
      image:
        "https://user-images.githubusercontent.com/95645570/226000981-9a84863d-06c1-42a7-8ed8-cae3555f1582.png",
    },
    {
      id: 4,
      title: "Password Generator",
      description:
        "Password generator where you can create a password with any conditions what you want",
      link: "https://github.com/klyutko7p/password-generator",
      image:
        "https://user-images.githubusercontent.com/95645570/226001562-4984b078-b398-4d23-b07c-1e3c65a9148d.png",
    },
    {
      id: 5,
      title: "Catalog of Movies (Updated)",
      description: "Updated version of Catalog of Movies",
      link: "https://github.com/klyutko7p/klyutko-films",
      image:
        "https://user-images.githubusercontent.com/95645570/241688708-179acc70-9255-458a-a929-89db49f76be0.png",
    },
    {
      id: 6,
      title: "Catalog of Movies",
      description:
        "Movie catalog with filters and search for any movies to your taste",
      link: "https://github.com/klyutko7p/films",
      image:
        "https://user-images.githubusercontent.com/95645570/226002547-7d17ddf1-cfb1-44d0-9873-f5137c35d743.png",
    },
    {
      id: 7,
      title: "Time Project",
      description: "Project where reproduced work with JS time",
      link: "https://github.com/klyutko7p/Time-project",
      image:
        "https://user-images.githubusercontent.com/95645570/226003154-6bf833ef-fd87-4af2-922c-4a152c9b5721.png",
    },
    {
      id: 8,
      title: "Budget App",
      description: "Enjoy your money!",
      link: "https://github.com/klyutko7p/budget-app",
      image:
        "https://user-images.githubusercontent.com/95645570/241690107-a00c76eb-2295-4d6a-9718-e5a3b10855be.png",
    },
  ]);
  let project = ref();

  function getOneProject(id: number) {
    project.value = projects.value.find(
      (project: Project) => project.id === id
    );
  }

  const getProjects = computed(() => projects.value);
  const getProject = computed(() => project.value);

  return { getProjects, getProject, getOneProject };
});
