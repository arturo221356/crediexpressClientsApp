import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/layouts/AppLayout.vue'
import Informacion from '@/views/Informacion.vue'
import Garantia from '@/views/Garantia.vue'
import Pagar from '@/views/Pagar.vue'
import Referencia from '@/views/Referencia.vue'
import { authGuard } from './guards'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/referencia',
      name: 'referencia',
      component: Referencia,
    },
    {
      path: '/',
      component: AppLayout,
      beforeEnter: authGuard,
      children: [
        {
          path: '',
          redirect: '/informacion',
        },
        {
          path: 'informacion',
          name: 'informacion',
          component: Informacion,
        },
        {
          path: 'garantia',
          name: 'garantia',
          component: Garantia,
        },
        {
          path: 'pagar',
          name: 'pagar',
          component: Pagar,
        },
      ],
    },
  ],
})

export default router
