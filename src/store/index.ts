import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStore = defineStore('store', () => {
  // dark mode
  const isDarkMode = ref<boolean>(false)
  function toggleDarkMode(): void {
    isDarkMode.value = !isDarkMode.value
  }
  function turnOnDarkMode(): void {
    isDarkMode.value = true
  }
  function turnOffDarkMode(): void {
    isDarkMode.value = false
  }

  return {
    isDarkMode, toggleDarkMode, turnOnDarkMode, turnOffDarkMode
  }
})