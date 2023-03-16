<template>
    <header>
        <nav class="flex items-center justify-between">
            <div>
                <img src="~/assets/images/klyutko-logo.svg" @click="$router.push('/')" class="cursor-pointer w-full h-16"
                    alt="">
            </div>
            <div class="max-lg:hidden">
                <NuxtLink active-class="gradient-text" to="/"
                    class="font-['Bai_Jamjuree'] gradient-color cursor-pointer duration-300 hover:scale-110 font-medium mr-5 text-lg">
                    Home
                </NuxtLink>
                <NuxtLink active-class="gradient-text" to="/services"
                    class="font-['Bai_Jamjuree'] gradient-color cursor-pointer duration-300 hover:scale-110 font-medium mr-5 text-lg">
                    Services
                </NuxtLink>
                <NuxtLink active-class="gradient-text" to="/projects"
                    class="font-['Bai_Jamjuree'] gradient-color cursor-pointer duration-300 hover:scale-110 font-medium mr-5 text-lg">
                    Projects
                </NuxtLink>
                <NuxtLink active-class="gradient-text" to="/contact"
                    class="font-['Bai_Jamjuree'] gradient-color cursor-pointer duration-300 hover:scale-110 font-medium mr-5 text-lg">
                    Contact
                </NuxtLink>
            </div>
            <div class="max-lg:hidden">
                <a href="https://t.me/klyutko7p" target="_blank">
                    <UIMainButton>let's talk</UIMainButton>
                </a>
            </div>
            <div class="max-lg:block hidden space-y-2">
                <div class="w-8 h-1 bg-white"></div>
                <div class="w-8 h-1 bg-white"></div>
                <div class="w-8 h-1 bg-white"></div>
            </div>
        </nav>
    </header>
</template>

<script setup lang="ts">

</script>

<style scoped></style>