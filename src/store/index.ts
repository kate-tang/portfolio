import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStore = defineStore('store', () => {
  // dark mode
  const isDarkMode = ref<boolean>(false)
  function toggleDarkMode() {
    isDarkMode.value = !isDarkMode.value
  }
  function turnOnDarkMode() {
    isDarkMode.value = true
  }
  function turnOffDarkMode() {
    isDarkMode.value = false
  }

  return {
    isDarkMode, toggleDarkMode, turnOnDarkMode, turnOffDarkMode
  }
})