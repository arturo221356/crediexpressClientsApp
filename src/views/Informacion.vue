<template>
    <div class="space-y-4">
        <h2 class="text-3xl font-bold">Hola {{ auth.credit?.client?.name }}</h2>
        <div class="bg-white rounded-lg border p-6 space-y-4">
            <p class="text-gray-600">
                Aqui puedes ver la informacion de tu credito
            </p>
            <div class="grid grid-cols-1 gap-2 w-full">
                <div class="p-4 bg-slate-50 rounded-lg">
                    <p class="text-sm text-gray-600">Referencia</p>
                    <h3 class="font-semibold mb-2">{{ auth.credit.reference }}</h3>

                    <p class="text-sm text-gray-600">Equipo</p>
                    <h3 class="font-semibold mb-2">{{ auth.credit.device_name }}</h3>
                </div>
                <div class="p-4 bg-slate-50 rounded-lg  grid  w-full">

                    <div class="flex  justify-between w-full">
                        <p class="text-sm text-gray-600">Fecha limite de pago</p>
                        <h3 class="font-semibold mb-2">{{ dayjs(auth.credit.due_at).format('DD/MM/YY') }}</h3>
                    </div>
                    <div class="flex justify-between w-full">

                        <p class="text-sm text-gray-600">Parcialidad</p>
                        <h3 class="font-semibold mb-2">{{ money(auth.credit.installment_amount) }}</h3>
                    </div>
                </div>

                <div class="p-4 bg-slate-50 rounded-lg  grid  w-full">
                    <h3 class="font-semibold mb-2">{{ `Pago ${auth.credit?.latest_payment?.sequence || 0} de
                        ${auth.credit.installments}` }}</h3>
                    <Progress :model-value="progress" />
                </div>



            </div>
            <h3 class="font-bold">Pagos:</h3>

            <div class=" bg-slate-50 rounded-lg    w-full">

                <Item
                    variant="outline"
                    v-for="payment in auth.credit.payments"
                    :key="payment.id"
                >
                    <ItemContent>
                        <ItemTitle class="text-sm">{{ payment.description }}</ItemTitle>
                        <ItemDescription>
                            {{ dayjs(payment.created_at).format('DD/MM/YY hh:mm') }}
                        </ItemDescription>
                    </ItemContent>
                    <ItemActions>
                        <Badge>
                            {{ money(payment.amount) }}
                        </Badge>
                    </ItemActions>
                </Item>
            </div>


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

    const moneyFmt = new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN" });

    const money = (v: unknown) => {
        const n = typeof v === "string" ? Number(v) : (v as number);
        if (Number.isFinite(n)) return moneyFmt.format(n as number);
        return "—";
    };

    const progress = computed(() => {

        const installments = Number(auth.credit.installments);

        const latest_payment_secuence = Number(auth.credit?.latest_payment?.sequence || 0);

        return latest_payment_secuence * 100 / installments;
    });

</script>