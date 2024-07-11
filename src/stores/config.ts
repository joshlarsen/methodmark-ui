import { Ref, ref } from 'vue'
import axios from 'axios'
import moment from 'moment'
import { AxiosInstance } from 'axios'

// axios setup
const BASE_URL = import.meta.env.VITE_BASE_URL
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    'accept': 'application/json',
  }
})


const userLocale = navigator.language || 'en-US'
const loggedIn = ref(false)

const signIn = () => {
	loggedIn.value = true
}

const signOut = () => {
	loggedIn.value = false
}

interface ConfigStore {
  axios: AxiosInstance
  customNumberFormat: (number: number) => string
  customNumberFormatK: (number: number) => string
  localeTimestamp: (ts: number) => string
  localeTimestampShort: (ts: number) => string
  localeDate: (ts: number) => string
  loggedIn: Ref<boolean>
  timeAgoInWords: (ts: number) => string
  signIn: () => void
  signOut: () => void
}

export function useConfigStore(): ConfigStore {
  const localeTimestamp = (ts: number) => {
    const date = new Date(ts * 1000)
    const timeString = date.toLocaleTimeString(userLocale, {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    })
    return timeString
  }

  const localeTimestampShort = (ts: number) => {
    const date = new Date(ts * 1000)
    const timeString = date.toLocaleTimeString(userLocale, {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    })
    return timeString
  }

  const localeDate = (ts: number) => {
    const date = new Date(ts * 1000)
    const dateString = date.toLocaleDateString(userLocale, {
      month: 'short',
      day: 'numeric',
    })
    return dateString
  }

  const timeAgoInWords = (ts: number) => {
    const d = new Date(ts * 1000)
    return moment(d).fromNow()
  }

  const customNumberFormat = (n: number) => {
    const formatter = new Intl.NumberFormat(userLocale, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    })
  
    return formatter.format(n)
  }

  const customNumberFormatK = (n: number) => {
    const formatter = new Intl.NumberFormat(userLocale, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 1
    })
  
    if (n >= 1000) {
      // Format the number as "K" (thousands) when it's 1000 or greater
      // return formatter.format(n / 1000) + 'K';
      return formatter.format(n / 1000)
    }
    return formatter.format(n)
  }

	return {
		axios: axiosInstance,
    customNumberFormat,
    customNumberFormatK,
		loggedIn,
    localeTimestamp,
    localeTimestampShort,
    localeDate,
		signIn,
		signOut,
    timeAgoInWords
	}
}
