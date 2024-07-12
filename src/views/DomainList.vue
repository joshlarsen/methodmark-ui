<template>
  <header class="py-10">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold tracking-tight text-white">Domains</h1>
    </div>
  </header>
  <main class="-mt-32">
    <div class="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
      <div class="rounded-lg bg-white px-5 py-6 shadow sm:px-6">
        <div v-for="domain in domains"
             :key="domain.name"
             class="text-sm">
          <router-link :to="`/domains/${domain.name}`">{{ domain.name }}</router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { onMounted, Ref } from 'vue'
import { useDomainStore } from '@/stores/domain'

type Domain = {
  name: string
  created_at: string
}

const domainService = useDomainStore()
const domains: Ref<Domain[]> = domainService.domains

onMounted(() => {
  domainService.getDomains()
})
</script>