import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/HelloWorld')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('@/views/accountChange')
  },
  {
    path:'*',
    name:'404',
    component: () => import('@/views/404')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  next()
})

export default router
