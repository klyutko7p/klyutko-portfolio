<template>
    <div>
        <h1 class="mb-7 font-bold text-5xl max-lg:text-4xl max-md:text-3xl max-sm:text-2xl">{{ header }}</h1>
    </div>
</template>

<script lang="ts" setup>

defineProps({
    header: {type: String, required: true}
})


</script>