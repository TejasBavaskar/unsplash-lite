import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import ImageDetails from '../views/ImageDetails.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/image/:id',
    name: 'ImageDetails',
    component: ImageDetails,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
