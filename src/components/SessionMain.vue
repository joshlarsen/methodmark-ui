<template>
  <div class="mt-20 overflow-hidden rounded-[0.5rem] border bg-background shadow">
    <div
         class="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div class="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
        <div class="absolute inset-0 bg-zinc-900" />
        <div class="relative z-20 flex items-center text-lg font-medium">
          <svg class="mr-2 h-6 w-6"
               viewBox="0 0 395 409"
               stroke="currentColor"
               fill="currentColor">
            <g transform="matrix(1,0,0,1,-799.865,-643.04)">
              <g>
                <path
                      d="M1017.85,1048.43C995.541,1042.68 983.209,1029.76 972.408,1018.44C967.254,1013.03 962.583,1008.14 958.562,1006.37C953.643,1004.22 944.293,1004.74 934.549,1005.28C915.975,1006.32 896.375,1007.41 880.562,994.124C862.251,978.748 857.875,959.36 853.383,939.456C848.48,917.735 843.388,895.176 810.211,884.263C802.348,881.707 798.046,873.26 800.603,865.397C802.289,860.21 806.539,856.573 811.493,855.432C862.421,841.107 893.533,821.942 914.944,799.812C936.39,777.646 948.876,751.444 961.867,724.107C979.243,687.53 1004.16,663.905 1031.29,652.073C1051.59,643.218 1073.02,640.987 1093.47,644.882C1113.87,648.767 1133.22,658.712 1149.41,674.218C1172.3,696.136 1188.85,729.225 1192.79,771.92C1196.27,809.693 1192.19,852.337 1181.85,892.511C1171.65,932.093 1155.31,969.527 1134.02,997.902C1111.49,1027.94 1083.28,1048.16 1050.5,1051.19C1039.97,1052.16 1029.07,1051.32 1017.85,1048.43ZM994.087,997.814C1002.15,1006.26 1011.35,1015.91 1025.23,1019.49C1033.05,1021.5 1040.59,1022.09 1047.81,1021.42C1071.3,1019.26 1092.47,1003.5 1110.12,979.973C1129.01,954.785 1143.65,921.07 1152.9,885.128C1162.43,848.141 1166.2,809.055 1163.02,774.615C1159.8,739.694 1146.71,713.053 1128.67,695.78C1116.77,684.382 1102.69,677.1 1087.96,674.295C1073.28,671.499 1057.87,673.113 1043.24,679.493C1022.4,688.583 1002.96,707.358 988.936,736.88C974.861,766.5 961.326,794.895 936.388,820.67C916.853,840.862 890.792,858.793 852.809,873.308C872.865,889.962 877.781,911.716 882.561,932.894C885.919,947.772 889.19,962.264 899.779,971.157C906.578,976.868 920.097,976.115 932.908,975.401C946.266,974.657 959.083,973.942 970.514,978.954C980.11,983.164 986.755,990.129 994.087,997.814Z" />
                <path
                      d="M1064.1,749.426C1074.94,749.426 1083.73,758.217 1083.73,769.059C1083.73,779.902 1074.94,788.693 1064.1,788.693C1053.25,788.693 1044.46,779.902 1044.46,769.059C1044.46,758.217 1053.25,749.426 1064.1,749.426Z" />
                <path
                      d="M1120.96,749.426C1131.8,749.426 1140.59,758.217 1140.59,769.059C1140.59,779.902 1131.8,788.693 1120.96,788.693C1110.12,788.693 1101.32,779.902 1101.32,769.059C1101.32,758.217 1110.12,749.426 1120.96,749.426Z" />
              </g>
            </g>
          </svg>
          GIN
        </div>
        <div class="relative z-20 mt-auto">
          <blockquote class="space-y-2">
            <p class="text-lg opacity-90">
              &ldquo;All warfare is based on deception.&rdquo;
            </p>
            <footer class="text-sm opacity-50">
              Sun Tzu
            </footer>
          </blockquote>
        </div>
      </div>
      <div class="lg:p-8">
        <div class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <Alert variant="destructive"
                 v-if="showLoggedOutMessage"
                 class="flex items-center">
            <AlertDescription>
              Session has expired, please log in again.
            </AlertDescription>
          </Alert>
          <Button as-child>
            <a class="flex"
               :href="`${BASE_URL}/auth/login`">
              <svg viewBox="0 0 18 18"
                   class="mr-4 h-5 w-5">
                <g fill="none">
                  <path fill="hsl(var(--primary-foreground))"
                        fill-rule="nonzero"
                        d="M17.64,9.20454545 C17.64,8.56636364 17.5827273,7.95272727 17.4763636,7.36363636 L9,7.36363636 L9,10.845 L13.8436364,10.845 C13.635,11.97 13.0009091,12.9231818 12.0477273,13.5613636 L12.0477273,15.8195455 L14.9563636,15.8195455 C16.6581818,14.2527273 17.64,11.9454545 17.64,9.20454545 Z">
                  </path>
                  <path fill="hsl(var(--primary-foreground))"
                        fill-rule="nonzero"
                        d="M9,18 C11.43,18 13.4672727,17.1940909 14.9563636,15.8195455 L12.0477273,13.5613636 C11.2418182,14.1013636 10.2109091,14.4204545 9,14.4204545 C6.65590909,14.4204545 4.67181818,12.8372727 3.96409091,10.71 L0.957272727,10.71 L0.957272727,13.0418182 C2.43818182,15.9831818 5.48181818,18 9,18 Z">
                  </path>
                  <path fill="hsl(var(--primary-foreground))"
                        fill-rule="nonzero"
                        d="M3.96409091,10.71 C3.78409091,10.17 3.68181818,9.59318182 3.68181818,9 C3.68181818,8.40681818 3.78409091,7.83 3.96409091,7.29 L3.96409091,4.95818182 L0.957272727,4.95818182 C0.347727273,6.17318182 0,7.54772727 0,9 C0,10.4522727 0.347727273,11.8268182 0.957272727,13.0418182 L3.96409091,10.71 Z">
                  </path>
                  <path fill="hsl(var(--primary-foreground))"
                        fill-rule="nonzero"
                        d="M9,3.57954545 C10.3213636,3.57954545 11.5077273,4.03363636 12.4404545,4.92545455 L15.0218182,2.34409091 C13.4631818,0.891818182 11.4259091,0 9,0 C5.48181818,0 2.43818182,2.01681818 0.957272727,4.95818182 L3.96409091,7.29 C4.67181818,5.16272727 6.65590909,3.57954545 9,3.57954545 Z">
                  </path>
                  <polygon points="0 0 18 0 18 18 0 18"></polygon>
                </g>
              </svg> Sign in with Google
            </a>
          </Button>
          <p class="px-8 text-center text-xs text-muted-foreground">
            Access is monitored and logged.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { inject, onMounted, ref } from 'vue'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription } from '@/components/ui/alert'

const BASE_URL = inject('BASE_URL')
const showLoggedOutMessage = ref(false)


onMounted(() => {
  const urlParams = new URLSearchParams(window.location.search)
  const status = urlParams.get('status')

  if (status === 'loggedOut') {
    showLoggedOutMessage.value = true
  }

  // Clean up URL query string
  // Construct URL without query string
  let urlWithoutQuery = window.location.protocol + "//" + window.location.host + window.location.pathname
  // Update the URL without reloading the page
  window.history.pushState({ path: urlWithoutQuery }, '', urlWithoutQuery)
})
</script>