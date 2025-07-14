import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import Login from './pages/Login.vue';
import AdminPageTemplate from './pages/admin/AdminPageTemplate.vue';
import NotAdminPageTemplate from './pages/NotAdminPageTemplate.vue';

const routes = [
  {
    path: '/admin',
    component: AdminPageTemplate,
    children: [
      { path: '', name: 'AdminMain', component: () => import('./pages/admin/AdminMain.vue') },
      { path: 'page1', name: 'AdminPage1', component: () => import('./pages/admin/AdminPage1.vue') },
      { path: 'page2', name: 'AdminPage2', component: () => import('./pages/admin/AdminPage2.vue') },
      { path: 'page3', name: 'AdminPage3', component: () => import('./pages/admin/AdminPage3.vue') }
    ]
  },
  {
    path: '/',
    component: NotAdminPageTemplate,
    children: [
      { path: '', name: 'Home', component: Home },
      { path: 'login', name: 'Login', component: Login }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// Navigation guard to prevent access to login page if already logged in and restrict /admin for unauthorized users
router.beforeEach((to, from, next) => {
  const isAuthorized = localStorage.getItem('isAuthorized') === 'true';
  if (to.path === '/login' && isAuthorized) {
    next('/admin');
  } else if (to.path.startsWith('/admin') && !isAuthorized) {
    next('/login');
  } else {
    next();
  }
});

export default router;
