import { createRouter, createWebHistory } from 'vue-router'
import ImageList from '../views/ImageList.vue'
import Settings from '../views/Settings.vue'
import Converter from '../views/Converter.vue'
import Login from '../views/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { layout: 'empty' } // Đánh dấu layout trống cho trang login
    },
    {
      path: '/',
      name: 'imageList',
      component: ImageList
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings
    },
    {
      path: '/converter',
      name: 'converter',
      component: Converter
    }
  ]
})

// Navigation Guard để bảo vệ route
router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  if (to.name !== 'login' && !isLoggedIn) {
    // Nếu chưa đăng nhập và cố vào trang khác, chuyển về login
    next({ name: 'login' });
  } else if (to.name === 'login' && isLoggedIn) {
    // Nếu đã đăng nhập và cố vào lại trang login, chuyển về trang chủ
    next({ name: 'imageList' });
  } else {
    // Cho phép đi tiếp
    next();
  }
});


export default router