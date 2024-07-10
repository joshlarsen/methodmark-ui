<template>
  <div class="flex min-h-screen flex-col">
    <div class="p-2">
      <div class="max-w-lg mx-auto p-4 bg-zinc-300 rounded">
        <Button>Click me</Button>
      </div>
    </div>
    <main class="container">
      <Session v-if="!loggedIn" />
      <Dashboard v-if="loggedIn" />
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Session from '@/components/SessionMain.vue'
import Dashboard from '@/components/DashboardMain.vue'
import { Button } from '@/components/ui/button'

const loggedIn = ref(false)
</script>
