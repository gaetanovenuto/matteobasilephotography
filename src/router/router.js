import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MainProjectView from '../views/MainProjectView.vue'
import MainSeriesView from '../views/MainSeriesView.vue'
import AlivaraView from '../views/Projects/AlivaraView.vue'
import UgandaView from '../views/Series/UgandaView.vue'
import MaroccoView from '../views/Series/MaroccoView.vue'
import SelfPortraitsView from '../views/Series/SelfPortraitsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/projects',
      name: 'Projects',
      component: MainProjectView,
    },
    {
      path: '/series',
      name: 'Series',
      component: MainSeriesView,
    },
    {
      path: '/projects/alivara',
      name: 'Alivara',
      component: AlivaraView
    },
    {
      path: '/series/uganda',
      name: 'Uganda',
      component: UgandaView
    },
    {
      path: '/series/marocco',
      name: 'Marocco',
      component: MaroccoView
    },
    {
      path: '/series/self-portraits',
      name: 'SelfPortraits',
      component: SelfPortraitsView
    },
  ],
})

export default router
