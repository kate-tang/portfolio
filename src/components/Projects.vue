<script setup lang="ts">
import covidImage from '../assets/covid-19-dashboard.jpg'
import youtubeImage from '../assets/clone-youtube.jpg'
import puzzleImage from '../assets/puzzle-shop.jpg'
import adoptionImage from '../assets/animal-adoption.jpg'

interface project {
  id: number;
  title: string;
  techs: string[];
  description: string;
  image: string;
  github: string;
  demo: string;
  finishDate: string;
}
const projects: project[] = [
  {
    id: 1,
    title: 'COVID-19-Dashboard',
    techs: ['TypeScript', 'Vue 3', 'SCSS', 'CSS Grid'],
    description: 'The dashboard provides up-to-date stats and info of COVID-19 in Taiwan.',
    image: covidImage,
    github: 'https://github.com/kate-tang/covid-19-dashboard',
    demo: 'https://kate-tang.github.io/covid-19-dashboard/#/',
    finishDate: 'July 2022',
  },
  {
    id: 2,
    title: 'YouTube Clone',
    techs: ['Vue 3', 'Vuex', 'SCSS'],
    description: 'Build a YouTube Homepage Clone with infinite scrolling and dark mode.',
    image: youtubeImage,
    github: 'https://github.com/kate-tang/clone-youtube',
    demo: 'https://kate-tang.github.io/clone-youtube/#/',
    finishDate: 'April 2022',
  },
  {
    id: 3,
    title: 'Puzzle Shop',
    techs: ['Vue 3', 'Express', 'Firebase'],
    description: 'A simple shopping cart. People can browse for products, add to favorite/cart, and use zoom-in feature to check out image details. Build especially for puzzler!',
    image: puzzleImage,
    github: 'https://github.com/kate-tang/puzzle-shop',
    demo: 'https://kate-tang.github.io/puzzle-shop/#/',
    finishDate: 'March 2022',
  },
  {
    id: 4,
    title: 'Animal Adoption',
    techs: ['Vue 3', 'SCSS'],
    description: 'A Vue application for people looking to adopt animals.',
    image: adoptionImage,
    github: 'https://github.com/kate-tang/animal-adoption',
    demo: 'https://kate-tang.github.io/animal-adoption/#/',
    finishDate: 'September 2021',
  },
]
</script>

<template>
  <section>
    <h2 class="section-title">Projects</h2>
    <ul class="section-content sm:text-white text-black">
      <li v-for="project in projects" :key="project.id" class="relative sm:mb-28 mb-[20vw] rounded sm:overflow-hidden group">
        <a :href="project.demo" target="_blank">
          <div class="sm:absolute static sm:top-0 sm:left-0 w-full sm:h-full flex flex-col justify-center items-center sm:mb-0 mb-4 lg:px-20 sm:px-16 px-6 z-10 sm:bg-black/50 bg-transparent group-hover:md:bg-black/70">
            <span class="sm:text-sm text-xs">{{ project.finishDate }}</span>
            <h3 class="sm:mb-1 mb-1 sm:text-xl text-lg font-semibold">{{ project.title }}</h3>
            <div class="flex flex-col justify-center items-center md:opacity-0 md:h-0 group-hover:md:opacity-100 group-hover:md:h-auto transition-none group-hover:transition group-hover:duration-700">
              <p class="sm:mb-3 mb-2 sm:text-lg text-base">{{ project.description }}</p>
              <ul class="flex sm:mb-4 mb-2 sm:text-sm text-xs">
                <li class="sm:mr-2 mr-1 last:mr-0 sm:px-2 px-1.5 sm:py-px border border-blue sm:rounded rounded-sm whitespace-nowrap" v-for="tech in project.techs">{{ tech }}</li>
              </ul>
              <div class="flex text-xl">
                <a :href="project.demo" target="_blank" class="block sm:mx-1 mx-0.5"><icon-ci-external-link /></a>
                <a :href="project.github" target="_blank" class="block sm:mx-1 mx-0.5"><icon-iconoir-github /></a>
              </div>
            </div>
          </div>
          <img :src="project.image" :alt="project.title" class=" bg-cover">
        </a>
      </li>
    </ul>
  </section>
</template>