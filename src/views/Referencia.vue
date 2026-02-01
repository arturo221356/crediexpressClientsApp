<template>
    <div class="min-h-screen bg-slate-50  flex items-center justify-center p-4">
        <div class="w-full max-w-md">
            <div class="bg-white rounded-2xl shadow-2xl p-8 space-y-6">
                <!-- Logo y título -->
                <div class="text-center space-y-4">
                    <div class="inline-flex items-center justify-center   ">
                        <img src="../assets/crediexpress-logo-no-background.png" />
                    </div>
                    <div>

                        <p class="text-slate-600 mt-2">Ingresa tu referencia de crédito</p>
                    </div>
                </div>

                <!-- Formulario -->
                <div class="space-y-4">
                    <div>
                        <label class="block text-sm font-medium text-slate-700 mb-2">
                            Referencia de Crédito
                        </label>
                        <input
                            v-model="referencia"
                            type="text"
                            placeholder="Ej: AA11223"
                            @keypress="handleKeyPress"
                            class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all"
                            :class="{ 'border-red-500': error }"
                        />
                        <p
                            v-if="error"
                            class="mt-2 text-sm text-red-600"
                        >
                            {{ error }}
                        </p>
                    </div>

                    <Button
                        @click="validarReferencia"
                        :disabled="loading"
                        class="w-full py-6 text-lg"
                    >
                        <template v-if="loading">
                            <span class="inline-block animate-spin mr-2">⏳</span>
                            Validando...
                        </template>
                        <template v-else>
                            Continuar
                            <ArrowRight
                                :size="20"
                                class="ml-2"
                            />
                        </template>
                    </Button>
                </div>

                <!-- Información adicional -->
                <div class="pt-4 border-t border-slate-200">
                    <p class="text-xs text-slate-500 text-center">
                        Tu referencia de crédito se encuentra en el documento que recibiste al solicitar tu
                        crédito.
                    </p>
                </div>
            </div>


        </div>
    </div>
</template>

<script
    setup
    lang="ts"
>
    import { ref, onMounted } from 'vue'
    import { useRouter, useRoute } from 'vue-router'
    import { useAuthStore } from '@/stores/auth'
    import { Button } from '@/components/ui/button'
    import { CreditCard, ArrowRight } from 'lucide-vue-next'


    const router = useRouter()
    const authStore = useAuthStore()
    const route = useRoute();
    const referencia = ref('')
    const error = ref('')
    const loading = ref(false)



    const validarReferencia = async () => {
        error.value = ''

        if (!referencia.value.trim()) {
            error.value = 'Por favor ingresa tu referencia de crédito'
            return
        }

        if (referencia.value.length < 6) {
            error.value = 'La referencia debe tener al menos 7 caracteres'
            return
        }

        loading.value = true

        const exito = await authStore.fetchCredit(referencia.value)

        if (exito) {
            // Redirigir o hacer algo con authStore.credit
            router.push('/informacion')
        }

        loading.value = false;


    }



    const handleKeyPress = (event: KeyboardEvent) => {
        if (event.key === 'Enter') {
            validarReferencia()
        }
    }

    onMounted(() => {
        if (authStore.credit) {
            router.push('/informacion');
        }

        const ref = route.query?.referencia;
        if (ref) {
            referencia.value = ref;

            validarReferencia();

        }
    });
</script>