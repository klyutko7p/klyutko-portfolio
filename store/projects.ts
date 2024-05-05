import { defineStore } from "pinia";

export const useProjectsStore = defineStore("projects", () => {
  let projects = ref([
    {
      id: 10,
      title: "Darom.pro",
      description: "CRM-система darom.pro: Доставка товаров из маркетплейса",
      link: "https://darom-pro.netlify.app",
      image: "https://github.com/klyutko7p/darom.pro/assets/95645570/3282dad1-c07e-4941-aae3-d3aeb36250bb",
    },
    {
      id: 11,
      title: "Smartsklad",
      description: "Обрезанная версия Darom.pro для доступа к партнёрам",
      link: "https://smartsklad-pro-1.netlify.app/",
      image:
        "https://github.com/klyutko7p/smartsklad-pro-1/assets/95645570/e516a483-75d4-42a8-b5e1-ab395632a472",
    },
    {
      id: 12,
      title: "Оценка тональности текста",
      description:
        "Оценка тональности текста с использованием нейросети от Google - Gemini",
      link: "https://github.com/klyutko7p/tonality",
      image:
        "https://private-user-images.githubusercontent.com/95645570/328017037-a5a36d3e-7a17-492b-885c-478aa6f8ebe3.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTQ5MTIwNTUsIm5iZiI6MTcxNDkxMTc1NSwicGF0aCI6Ii85NTY0NTU3MC8zMjgwMTcwMzctYTVhMzZkM2UtN2ExNy00OTJiLTg4NWMtNDc4YWE2ZjhlYmUzLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA1MDUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNTA1VDEyMjIzNVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTdkOTQwMTUwNTY1ZDllYTEyNjUyYjZkMjAyM2ZiNjA0MzgxOWRiMjYxMGJmMTgyZDcxZGE4MTVlYTdhZGE4ZDYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.gdPGDeaRh1tV3ksxmV5wsm5TsJd6Sbo1eYwKwsBeKug",
    },
    {
      id: 13,
      title: "Медитативная графика от Анастасии",
      description:
        "Личный веб-сайт, предназначенный для продажи курсов по рисованию",
      link: "https://anastassiya-tuyakova.kz/",
      image:
        "https://private-user-images.githubusercontent.com/95645570/328017086-6661ea7e-ce13-41e3-b85f-5d0762f273e4.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTQ5MTIxMjIsIm5iZiI6MTcxNDkxMTgyMiwicGF0aCI6Ii85NTY0NTU3MC8zMjgwMTcwODYtNjY2MWVhN2UtY2UxMy00MWUzLWI4NWYtNWQwNzYyZjI3M2U0LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA1MDUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNTA1VDEyMjM0MlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTFmYWY1OTM4ODU2YzgzNjk4NmU2MGZmMWIxZDNiYTc3MDNiY2NhYTVlYWJkODc0NTcyMzY5OTI4YWZhMDQyMGImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.TvBktOCi1ffVUHxNKMk63pgCpJtW6tU8opOtocEbT44",
    },
    {
      id: 14,
      title: "Школа шахмат 'Ход конём'",
      description: "Обновленная версия оффлайн и онлайн сайта школы шахмат",
      link: "https://chess-astana.kz/",
      image: "https://github.com/klyutko7p/chess-site/assets/95645570/ca419594-527c-454e-8dc7-cd16a8f64f6b",
    },
    {
      id: 15,
      title: "Генератор цитат",
      description:
        "Приложение по генерации, поиску и фильтрации различных цитат",
      link: "https://github.com/klyutko7p/qoute-generator",
      image:
        "https://github.com/klyutko7p/qoute-generator/assets/95645570/fded4a3f-74b7-4de8-a93f-969a00299239",
    },
    {
      id: 17,
      title: "Каталог фильмов (Обновленный)",
      description: "Обновленная версия Каталога фильмов",
      link: "https://github.com/klyutko7p/klyutko-films",
      image:
        "https://user-images.githubusercontent.com/95645570/241688708-179acc70-9255-458a-a929-89db49f76be0.png",
    },
    {
      id: 1,
      title: "ToDo приложение",
      description: "Простое todo-приложение для записи мыслей и задач",
      link: "https://github.com/klyutko7p/todo-app",
      image:
        "https://user-images.githubusercontent.com/95645570/225997054-26a5b66b-2fb8-460e-9814-25d1a5da3037.png",
    },
    {
      id: 2,
      title: "Приложение по погоде",
      description:
        "Приложение, в котором вы можете просматривать подробную информацию о погоде в вашем городе",
      link: "https://github.com/klyutko7p/weather-app",
      image:
        "https://user-images.githubusercontent.com/95645570/226000720-3b21aaff-04a1-4e59-a3fa-304eaa66d1ac.png",
    },
    {
      id: 4,
      title: "Генератор паролей",
      description:
        "Генератор паролей, где вы можете создать пароль с любыми условиями, которые вы хотите",
      link: "https://github.com/klyutko7p/password-generator",
      image:
        "https://user-images.githubusercontent.com/95645570/226001562-4984b078-b398-4d23-b07c-1e3c65a9148d.png",
    },
    {
      id: 8,
      title: "Приложение по бюджету",
      description: "Наслаждайтесь своими деньгами!",
      link: "https://github.com/klyutko7p/budget-app",
      image:
        "https://user-images.githubusercontent.com/95645570/241690107-a00c76eb-2295-4d6a-9718-e5a3b10855be.png",
    },
    {
      id: 3,
      title: "Онлайн-магазин",
      description:
        "Интернет-магазин с товарами, которые можно фильтровать, искать и покупать",
      link: "https://github.com/klyutko7p/nuxt-shop",
      image:
        "https://user-images.githubusercontent.com/95645570/226000981-9a84863d-06c1-42a7-8ed8-cae3555f1582.png",
    },
    {
      id: 6,
      title: "Каталог фильмов",
      description:
        "Каталог фильмов с фильтрами и поиском любых фильмов на ваш вкус",
      link: "https://github.com/klyutko7p/films",
      image:
        "https://user-images.githubusercontent.com/95645570/226002547-7d17ddf1-cfb1-44d0-9873-f5137c35d743.png",
    },
    {
      id: 7,
      title: "Проект по времени",
      description: "Проект, в котором воспроизводится работа с JS time",
      link: "https://github.com/klyutko7p/Time-project",
      image:
        "https://user-images.githubusercontent.com/95645570/226003154-6bf833ef-fd87-4af2-922c-4a152c9b5721.png",
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
