import { defineStore } from "pinia";

export const useServicesStore = defineStore("services", () => {
  let services = ref([
    {
      title: "Creating Front-End Projects",
      description:
        "Creating simple or complex projects that will help your business become more profitable or at least more effective :)",
      img: "https://res.cloudinary.com/practicaldev/image/fetch/s--fCxDJdp9--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/5ybg4msw5fxvv1m1sz2r.jpg",
    },
    {
      title: "Web Design",
      description:
        "Creating a web design of any scale and any interface that you want",
      img: "https://www.artificialintelligence-news.com/wp-content/uploads/sites/9/2023/01/adobe-ai-algorithms-machine-learning-train-artificial-intelligence-2048x1365.jpeg",
    },
    {
      title: "Creating and Design Landing Pages",
      description:
        "Creating comfortable and very stylish landing pages on your business or for you",
      img: "https://img3.teletype.in/files/e3/eb/e3ebe888-a3d6-4d8f-9644-d0fdced0b4b9.jpeg",
    },
  ]);

  const getServices = computed(() => services.value);

  return { getServices };
});
