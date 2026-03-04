import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Sodium from '../views/Sodium.vue'
import Supercapacitor from '../views/Supercapacitor.vue'
import Redox from '../views/Redox.vue'
import SolidState from '../views/SolidState.vue'
import OthersView from '../views/OthersView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/sodium', component: Sodium },
  { path: '/supercapacitor', component: Supercapacitor },
  { path: '/redox', component: Redox },
  { path: '/solid', component: SolidState },
  { path: '/others', component: OthersView },
  { path: '/about', component: AboutView },
  { path: '/contact', component: ContactView },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
