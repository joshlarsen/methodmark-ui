<template>
  <div class="grid gap-6">
    <form @submit="onSubmit">
      <div class="grid gap-2">
        <div class="grid gap-1">
          <Label class="sr-only"
                 for="email">
            Email
          </Label>
          <Input id="email"
                 placeholder="name@example.com"
                 type="email"
                 auto-capitalize="none"
                 auto-complete="email"
                 auto-correct="off"
                 :disabled="isLoading" />
        </div>
        <Button :disabled="isLoading">
          <svg v-if="isLoading"
               class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24">
            <circle class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"></circle>
            <path class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
            </path>
          </svg>
          Sign In with Email
        </Button>
      </div>
    </form>
    <div class="relative">
      <div class="absolute inset-0 flex items-center">
        <span class="w-full border-t" />
      </div>
      <div class="relative flex justify-center text-xs uppercase">
        <span class="bg-background px-2 text-muted-foreground">
          Or continue with
        </span>
      </div>
    </div>
    <Button variant="outline"
            type="button"
            :disabled="isLoading">
      <GithubLogoIcon class="mr-2 h-4 w-4" />
      GitHub
    </Button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { GithubLogoIcon } from "@radix-icons/vue"


const isLoading = ref(false)

async function onSubmit(event: Event) {
  event.preventDefault()
  isLoading.value = true

  setTimeout(() => {
    isLoading.value = false
  }, 3000)
}
</script>