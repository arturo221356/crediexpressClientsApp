import { useAuthStore } from '@/stores/auth'
import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

export function authGuard(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) {
  const authStore = useAuthStore()

  if (!authStore.isAuthenticated) {
    // Redirigir a la página de referencia si no está autenticado
    next('/')
  } else {
    // Permitir acceso
    next()
  }
}
