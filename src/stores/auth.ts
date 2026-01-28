import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useNotifier } from '@/composables/useNotifier'

// Define la interfaz del crédito
interface Credit {
  reference: string
  amount?: number
  status?: string
  // Agrega aquí todas las propiedades que retorna tu API
  [key: string]: any
}

export const useAuthStore = defineStore(
  'auth',
  () => {
    const credit = ref<Credit | null>(null)
    const isAuthenticated = computed(() => !!credit.value)
    const isLoading = ref(false)

    const url = import.meta.env.VITE_BASE_URL

    const { showToast } = useNotifier()

    function setCredit(creditData: Credit) {
      credit.value = creditData
    }

    function clearCredit() {
      credit.value = null
    }

    async function fetchCredit(reference: string): Promise<boolean> {
      isLoading.value = true

      try {
        const response = await fetch(`${url}/credit-externo/${reference}`)

        if (!response.ok) {
          if (response.status === 404) {
            showToast('error', 'Crédito no encontrado', 'Verifica tu referencia.')
            clearCredit()
            return false
          } else if (response.status === 500) {
            showToast('error', 'Error del servidor', 'Intenta nuevamente más tarde.')
            return false
          } else {
            showToast('error', 'Error en la solicitud', `Código: ${response.status}`)
            return false
          }
        }

        const data = await response.json()

        // Validar que la respuesta tenga el formato esperado
        if (!data || typeof data !== 'object') {
          showToast('error', 'Respuesta inválida', 'El servidor retornó datos incorrectos.')
          return false
        }

        setCredit(data)
        showToast('success', 'Crédito encontrado', 'Datos cargados correctamente.')
        return true
      } catch (error) {
        // Manejo de errores de red o parsing
        const errorMessage = error instanceof Error ? error.message : 'Error desconocido'
        console.error('Fetch error:', errorMessage)
        showToast('error', 'Error de conexión', 'Verifica tu conexión a internet.')
        return false
      } finally {
        isLoading.value = false
      }
    }

    return {
      credit,
      isAuthenticated,
      isLoading,
      setCredit,
      clearCredit,
      fetchCredit,
    }
  },
  {
    persist: true,
  },
)
