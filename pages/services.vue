<template v-cloak>
  <Head>
    <Title>Services Page</Title>
  </Head>
  <section>
    <HeaderForComponent>
      My <span class="gradient-text">Services</span>
    </HeaderForComponent>
    <div v-for="service in services">
      <ServicesService :service="service" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { useServicesStore } from '../store/services'
const storeServices = useServicesStore()
let services = ref<Array<Service>>([])

onMounted(() => {
  services.value = storeServices.getServices
})

</script>

<style scoped></style>
