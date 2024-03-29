import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue(),
    Components({
      resolvers: [
        IconsResolver({
          prefix: 'icon',
        }),
      ],
    }),
    Icons({
      compiler: 'vue3',
    }),
  ],
})
