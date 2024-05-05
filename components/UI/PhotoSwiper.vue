<template>
    <swiper :effect="'cards'" :grabCursor="true" :modules="modules"
        class="mySwiper w-80 h-[420px] max-sm:w-40 max-sm:h-72 max-[350px]:w-40">
        <swiper-slide><img src="~/assets/images/blue-book-img-third.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="~/assets/images/blue-book-img-first.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="~/assets/images/blue-book-img-second.jpg" alt=""></swiper-slide>
    </swiper>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/effect-cards'

import { EffectCards } from 'swiper'
let modules = [EffectCards]
</script>

<style scoped>
.swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 18px;
    font-size: 22px;
    font-weight: bold;
    color: #fff;
}
</style>