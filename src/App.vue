<template>
  <div class="flex min-h-screen flex-col">
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
