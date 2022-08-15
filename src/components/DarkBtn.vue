<script setup lang="ts">
import { useStore } from '../store'

const store = useStore()

function enableDarkMode(){
  store.turnOnDarkMode()
  document.body.classList.add('dark')
  localStorage.setItem('darkmode', 'enable')
}
function disableDarkMode(){
  store.turnOffDarkMode()
  document.body.classList.remove('dark')
  localStorage.setItem('darkmode', 'disable')
}
(function(){
  const dark = localStorage.getItem('darkmode')
  
  if (dark === 'enable'){
    enableDarkMode()
  } else {
    disableDarkMode()
  }
})()
</script>

<template>
  <div class="absolute top-5 right-5 text-4xl">
    <icon-line-md-sunny-filled class="text-yellow" @click="disableDarkMode" v-if="store.isDarkMode" />
    <icon-line-md-moon-filled class="text-yellow" @click="enableDarkMode" v-else />
  </div>
</template>