<template>
  <div class="flex min-h-screen flex-col">
    <SignIn v-if="!loggedIn" />
    <Dashboard v-if="loggedIn" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useConfigStore } from "@/stores/config"

import Session from '@/components/SessionMain.vue'
import Dashboard from '@/components/DashboardMain.vue'

import SignIn from '@/views/SignIn.vue'

const cfg = useConfigStore()
const loggedIn = ref(cfg.loggedIn)
</script>
