import { defineStore } from "pinia";

export const useProjectsStore = defineStore("projects", () => {
  let projects = ref([
    {
      id: 1,
      title: "ToDo App",
      description: "Simple todo-app to record your thoughts and tasks",
      link: "https://github.com/klyutko7p/todo-app",
      images: [
        "https://user-images.githubusercontent.com/95645570/225997054-26a5b66b-2fb8-460e-9814-25d1a5da3037.png",
      ],
    },
    {
      id: 2,
      title: "Weather App",
      description:
        "An application where you can view in-depth information about the weather in your city",
      link: "https://github.com/klyutko7p/weather-app",
      images: [
        "https://user-images.githubusercontent.com/95645570/226000720-3b21aaff-04a1-4e59-a3fa-304eaa66d1ac.png",
      ],
    },
    {
      id: 3,
      title: "Online Store",
      description:
        "Online store with products which can be filter, search and buy.",
      link: "https://github.com/klyutko7p/nuxt-shop",
      images: [
        "https://user-images.githubusercontent.com/95645570/226000981-9a84863d-06c1-42a7-8ed8-cae3555f1582.png",
      ],
    },
    {
      id: 4,
      title: "Password Generator",
      description:
        "Password generator where you can create a password with any conditions what you want",
      link: "https://github.com/klyutko7p/password-generator",
      images: [
        "https://user-images.githubusercontent.com/95645570/226001562-4984b078-b398-4d23-b07c-1e3c65a9148d.png",
      ],
    },
    {
      id: 5,
      title: "Catalog of Movies",
      description:
        "Movie catalog with filters and search for any movies to your taste",
      link: "https://github.com/klyutko7p/films",
      images: [
        "https://user-images.githubusercontent.com/95645570/226002547-7d17ddf1-cfb1-44d0-9873-f5137c35d743.png",
      ],
    },
    {
      id: 6,
      title: "Time Project",
      description: "Project where reproduced work with JS time",
      link: "https://github.com/klyutko7p/Time-project",
      images: [
        "https://user-images.githubusercontent.com/95645570/226003154-6bf833ef-fd87-4af2-922c-4a152c9b5721.png",
      ],
    },
  ]);

  const getProjects = computed(() => projects.value);

  return { getProjects };
});
