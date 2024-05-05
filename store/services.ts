import { defineStore } from "pinia";

export const useServicesStore = defineStore("services", () => {
  let services = ref([
    {
      title: "Создание Front-End проектов",
      description:
        "Создание простых или сложных проектов, которые помогут вашему бизнесу стать более прибыльным и более эффективным",
      img: "https://res.cloudinary.com/practicaldev/image/fetch/s--fCxDJdp9--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/5ybg4msw5fxvv1m1sz2r.jpg",
    },
    {
      title: "Веб-дизайн",
      description:
        "Создание веб-дизайна любого масштаба и любого интерфейса, который Вы пожелаете",
      img: "https://www.artificialintelligence-news.com/wp-content/uploads/sites/9/2023/01/adobe-ai-algorithms-machine-learning-train-artificial-intelligence-2048x1365.jpeg",
    },
    {
      title: "Создание и дизайн лендингов",
      description:
        "Создание удобных и очень стильных лендингов для Вашего бизнеса или для Вас лично",
      img: "https://img3.teletype.in/files/e3/eb/e3ebe888-a3d6-4d8f-9644-d0fdced0b4b9.jpeg",
    },
  ]);

  const getServices = computed(() => services.value);

  return { getServices };
});
