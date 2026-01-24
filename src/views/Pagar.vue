<template>
    <div class="space-y-4">
        <h2 class="text-3xl font-bold">Hola {{ auth.credit?.client?.name }}</h2>
        <div class="bg-white rounded-lg border p-6 space-y-4">
            <p class="text-gray-600">
                Referencias de pago automatico.
            </p>

            <p class="text-xs">
                Para pagos en OXXO solicita un pago OXXOPAY,<br />

                para otras tiendas/cadenas solicita tipo de pago
                ENEFEVO<br />

                La tienda puede cobrar una comision adicional. <br />

                El desbloqueo del equipo es en automatico, solo asegurate tenerlo conectado a internet.
            </p>

            <template v-if="references.length > 0">
                <div
                    class="grid grid-cols-1 gap-2 w-full"
                    v-for="reference in references"
                    :key="reference.id"
                >
                    <div class="p-4 bg-slate-50 rounded-lg">
                        <p class="text-sm text-gray-600">Referencia</p>
                        <h3 class="font-semibold mb-2">{{ reference.reference }}</h3>

                        <p class="text-sm text-gray-600">Tiendas </p>
                        <div class="flex flex-wrap gap-1">
                            <Badge
                                v-for="center in reference.centers"
                                :key="center.name"
                            >
                                {{ center.name }}
                            </Badge>
                        </div>

                    </div>

                </div>
            </template>

            <Item
                variant="outline"
                v-else
            >
                <ItemContent>
                    <ItemTitle class="text-sm">No tienes referencias de pago</ItemTitle>
                    <ItemDescription>
                        Solicita tu referencia en tienda.
                    </ItemDescription>
                </ItemContent>

            </Item>




        </div>
    </div>

</template>

<script
    setup
    lang="ts"
>

    import { useAuthStore } from '@/stores/auth';
    import { Button } from '@/components/ui/button';
    import dayjs from 'dayjs';
    import { Progress } from '@/components/ui/progress'
    import { computed } from 'vue';
    import {
        Item,
        ItemActions,
        ItemContent,
        ItemDescription,
        ItemMedia,
        ItemTitle,
    } from '@/components/ui/item'
    import { Badge } from '@/components/ui/badge'



    const auth = useAuthStore();

    const references = computed(() => {

        const datos = auth.credit.eq_passport_references;

        return datos
            .filter(item => !item.centers.some(c => c.name === "Passport"))
            .sort((a, b) => {
                const aOxxo = a.centers.some(c => c.name === "Oxxo");
                const bOxxo = b.centers.some(c => c.name === "Oxxo");
                return bOxxo - aOxxo;  // Oxxo primero
            });
    })



</script>