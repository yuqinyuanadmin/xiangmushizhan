import Vue from 'vue'
import VueRouter from 'vue-router'
import homePage from '@/views/homePage/homePage.vue'
import card from '@/views/card/card.vue'
import list from '@/views/list/list.vue'
import shangDetails from '@/views/shangDetails/shangDetails.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    redirect:"homePage"
  },
  {
    path:"/homePage",
    name:"homePage",
    component:homePage
  },
  {
    path:"/card",
    name:"card",
    component:card,
  },
  {
    path:"/list",
    name:"list",
    component:list
  },
  {
    path:'/shangDetails',
    name:"shangDetails",
    component:shangDetails
  }
]

const router = new VueRouter({
  routes
})

export default router
