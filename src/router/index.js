import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AnimeProfile from '../views/AnimeProfile.vue'
import AnimesPage from '../views/AnimesPage.vue'
import MoviesPage from '../views/MoviesPage.vue'
import GenresPage from '../views/GenresPage.vue'
import SearchAnime from '../views/SearchAnime.vue' 
import KrijoAnime from '../views/KrijoAnime.vue' 

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/anime/:id',
    name: 'AnimeProfile',
    component: AnimeProfile
  },
  {
    path: '/genres/:id',
    name: 'GenresPage',
    component: GenresPage
  },
  {
    path: '/animes',
    name: 'AnimesPage',
    component: AnimesPage
  },
  {
    path: '/movies',
    name: 'MoviesPage',
    component: MoviesPage
  },
  {
    path: '/search/:searchTag',
    name: 'SearchAnime',
    component: SearchAnime
  },
  {
    path: '/krijoanime',
    name: 'KrijoAnime',
    component: KrijoAnime
  },
 
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')

  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes,



})

router.beforeEach(() => {
  window.scrollTo(0, 0)
})

export default router
