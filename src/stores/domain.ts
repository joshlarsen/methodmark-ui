import { ref } from 'vue'
import { useConfigStore } from "@/stores/config"

const cfg = useConfigStore()
const axios = cfg.axios

export function useDomainStore() {
  const domains = ref([])

  // get domains
  const getDomains = async () => {
    const response = await axios.get('/api/domains')
    domains.value = response.data
  }

  return {
    domains,
    getDomains
  }
}