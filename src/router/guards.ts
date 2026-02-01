import { useAuthStore } from '@/stores/auth'
import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import { Capacitor } from '@capacitor/core'

export async function authGuard(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) {
  const authStore = useAuthStore()

  if (Capacitor.isNativePlatform()) {
    await authStore.restored
  }

  if (!authStore.isAuthenticated) {
    // Redirigir a la página de referencia si no está autenticado
    next('/')
  } else {
    // Permitir acceso
    next()
  }
}
