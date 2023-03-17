<template>
    <article class="mb-10 bg-[#161513] p-10 rounded-lg" data-aos="fade-left">
        <h1 class="text-4xl mb-5">{{ service.title }}</h1>
        <p class="mb-10 text-gray-400">
            {{ service.description }}
        </p>
        <UIServicesButton class="mb-10">HIRE ME</UIServicesButton>
        <img :src="service.img" class="w-2/3 max-lg:w-full" alt="">
    </article>
</template>

<script setup lang="ts">
defineProps({
    service: { type: Object as PropType<Service>, required: true }
})
</script>

<style scoped></style>