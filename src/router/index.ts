import { createRouter, createWebHistory } from 'vue-router'
import study from '../views/openAi.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'study',
      component: study
    },
  ]
})

export default router
