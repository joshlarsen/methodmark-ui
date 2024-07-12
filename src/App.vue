<template>
  <div class="flex min-h-screen flex-col">
    <SignIn v-if="!loggedIn" />
    <Root v-if="loggedIn" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useConfigStore } from "@/stores/config"

import SignIn from '@/views/SignInMain.vue'
import Root from '@/views/DashboardRoot.vue'

const cfg = useConfigStore()
// const loggedIn = ref(cfg.loggedIn)
const loggedIn = ref(true)
</script>
