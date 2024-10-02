import { createRouter, createWebHistory } from 'vue-router';
import CustomerForm from '../views/CustomerFormView.vue';
import CompletedView from '../views/CompletedView.vue';
import DeclinedView from '../views/DeclinedView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: CustomerForm,
    },
    {
      path: '/completed/:id',
      name: 'completed',
      component: CompletedView,
    },
    {
      path: '/declined',
      name: 'declined',
      component: DeclinedView,
    },
  ],
});

export default router;
