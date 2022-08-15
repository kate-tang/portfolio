<script setup lang="ts">
const projects = [
  {
    id: 1,
    title: 'Puzzle Shop',
    techs: ['vue', 'scss', 'html'],
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, beatae nesciunt! Molestias, inventore nisi iste, quia tenetur maxime dolore nihil dicta atque animi iure.',
    image: '../assets/puzzle-shop.jpg',
    github: '',
    demo: '',
  },
  {
    id: 2,
    title: 'Puzzle Shop',
    tech: ['vue', 'scss', 'html'],
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, beatae nesciunt! Molestias, inventore nisi iste, quia tenetur maxime dolore nihil dicta atque animi iure, alias nostrum mollitia. Dignissimos, unde ullam.',
    image: '',
  },
]
</script>

<template>
  <section>
    <h2 class="section-title">Projects</h2>
    <ul class="section-content">
      <li v-for="project in projects" :key="project.id" class="relative mb-28 rounded overflow-hidden group">
        <a href="" class="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center lg:px-20 sm:px-16 px-8 z-10 bg-black/50 group-hover:md:bg-black/70">
          <h3 class="mb-3 text-lg font-semibold">{{ project.title }}</h3>
          <div class=" flex flex-col justify-center items-center md:opacity-0 md:h-0 group-hover:md:opacity-100 group-hover:md:h-auto transition duration-500">
            <p class="mb-3 sm:text-base text-sm">{{ project.description }}</p>
            <ul class="flex mb-4 sm:text-sm text-xs">
              <li class="mr-2 sm:px-2 sm:py-0.5 px-1.5 border border-blue sm:rounded rounded-sm" v-for="tech in project.techs">{{ tech }}</li>
            </ul>
            <div class="flex text-xl">
              <a href="" class="block mr-2"><icon-iconoir-github /></a>
              <a href="" class="block"><icon-ci-external-link /></a>
            </div>
          </div>
        </a>
        <img src="../assets/puzzle-shop.jpg" :alt="project.title" class=" bg-cover">
      </li>
    </ul>
  </section>
</template>