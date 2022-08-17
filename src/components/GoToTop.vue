<script setup lang="ts">
import { ref } from 'vue'

const showGoToTopBtn = ref<boolean>(false)
window.addEventListener('scroll', (): void => {
  if (window.pageYOffset > 150){
    showGoToTopBtn.value = true
  } else {
    showGoToTopBtn.value = false
  }
})
function goToTop(): void {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <div class="fixed bottom-8 right-8 sm:p-3 p-2 bg-light dark:bg-dark rounded-full z-20 cursor-pointer transition-all duration-500 opacity-0 invisible" :class="{ '!opacity-100 !visible': showGoToTopBtn }" @click="goToTop">
    <icon-ep-arrow-up-bold class="sm:text-2xl text-lg" />
  </div>
</template>