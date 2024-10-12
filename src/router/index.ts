import { createRouter, createWebHistory } from 'vue-router';
import Main from '../components/Main.vue';
import Login from '../components/Login.vue';

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    meta: {
      requiresAuth: true, 
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//   const accessToken = localStorage.getItem('access_token');

//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if (!accessToken) {
//       next({ name: 'Login' });  
//     } else {
//       next(); 
//     }
//   } else {
//     next();  
//   }
// });

export default router;
