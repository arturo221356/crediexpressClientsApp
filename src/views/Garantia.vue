<script
    setup
    lang="ts"
>
    import { ShieldCheck } from 'lucide-vue-next'
</script>

<template>
    <div class="space-y-4">
        <h2 class="text-3xl font-bold">Garantía</h2>
        <div class="bg-white rounded-lg border p-6 space-y-4">
            <div class="flex items-center gap-2 text-green-600 mb-4">
                <ShieldCheck :size="32" />
                <h3 class="text-xl font-semibold">100% Garantizado</h3>
            </div>
            <ul class="space-y-3">
                <li class="flex items-start gap-2">
                    <span class="text-green-600 mt-1">✓</span>
                    <span class="text-gray-600">Protección total de tus datos</span>
                </li>
                <li class="flex items-start gap-2">
                    <span class="text-green-600 mt-1">✓</span>
                    <span class="text-gray-600">Transacciones seguras y encriptadas</span>
                </li>
                <li class="flex items-start gap-2">
                    <span class="text-green-600 mt-1">✓</span>
                    <span class="text-gray-600">Soporte técnico especializado</span>
                </li>
                <li class="flex items-start gap-2">
                    <span class="text-green-600 mt-1">✓</span>
                    <span class="text-gray-600">Garantía de satisfacción</span>
                </li>
            </ul>
        </div>
    </div>
</template>