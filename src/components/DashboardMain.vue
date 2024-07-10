<template>
  <div id="wrapper"
       class="md:grids-col-2 grid items-start justify-center gap-6 rounded-lg md:gap-4 lg:grid-cols-10 xl:grid-cols-12 xl:gap-4">
    dashboard
  </div>
</template>

<script setup lang="ts">
import { Ref, inject, onMounted, onUnmounted, ref } from "vue"
import { useConfigStore } from "@/stores/config"

import { AxiosInstance } from "axios"


/* load theme stuff */
const baseUrl = import.meta.env.VITE_BASE_URL
const cfg = useConfigStore()
/* axios client */
const axios = inject("axios") as AxiosInstance;

// compute cfg.isDark
const isDark = ref(cfg.isDark)
</script>
