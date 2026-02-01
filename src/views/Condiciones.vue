<script
    setup
    lang="ts"
>
    import { Handshake, ShieldCheck } from 'lucide-vue-next'
    import Separator from '@/components/ui/separator/Separator.vue';
    import { useAuthStore } from '@/stores/auth';
    import dayjs from 'dayjs';

    const authStore = useAuthStore();
</script>

<template>
    <div class="space-y-4">
        <div class="flex items-center gap-2 text-green-600 mb-4">
            <ShieldCheck :size="32" />
            <h3 class="text-xl font-semibold">Condiciones de garantia</h3>
        </div>
        <div class="bg-white rounded-lg border p-6 space-y-4">

            <Card>
                <CardContent class="p-6 space-y-6">
                    <!-- Alcance -->
                    <section class="space-y-2">
                        <h3 class="text-lg font-semibold">Alcance de la Garantía</h3>
                        <p class="text-sm leading-relaxed text-muted-foreground">
                            Este documento establece los términos y condiciones bajo los cuales el proveedor
                            ofrece garantía limitada para el equipo celular adquirido. La garantía cubre
                            exclusivamente defectos de fabricación en el equipo.
                        </p>
                    </section>

                    <Separator class="my-2" />

                    <!-- Condiciones -->
                    <section class="space-y-3">
                        <h3 class="text-lg font-semibold">Condiciones para la Aplicación de la Garantía</h3>
                        <ul class="list-disc pl-5 space-y-2 text-sm leading-relaxed text-muted-foreground">
                            <li>
                                El cliente debe presentar el comprobante de compra original junto con este
                                documento.
                            </li>
                            <li>
                                El equipo debe ser entregado en su estado original, sin alteraciones
                                externas o internas no autorizadas.
                            </li>
                            <li>
                                El diagnóstico técnico será realizado únicamente en un centro de servicio
                                autorizado por el proveedor.
                            </li>
                        </ul>
                    </section>

                    <Separator class="my-2" />

                    <!-- Causas de invalidez -->
                    <section class="space-y-3">
                        <h3 class="text-lg font-semibold">Causas de Invalidez de la Garantía</h3>
                        <ul class="space-y-3 text-sm leading-relaxed text-muted-foreground">
                            <li>
                                <span class="font-semibold text-foreground">Reparaciones no autorizadas:</span>
                                Intervención, manipulación o reparación realizada por talleres, técnicos o centros
                                de servicio no certificados por el proveedor, o uso de piezas no originales.
                            </li>
                            <li>
                                <span class="font-semibold text-foreground">Daños físicos:</span>
                                Golpes, caídas, deformaciones, rayaduras, grietas o cualquier otro daño mecánico
                                provocado por mal manejo o accidente.
                            </li>
                            <li>
                                <span class="font-semibold text-foreground">Daños por líquidos:</span>
                                Exposición a líquidos de cualquier tipo, incluso en equipos con certificación de
                                resistencia al agua.
                            </li>
                            <li>
                                <span class="font-semibold text-foreground">Uso indebido:</span>
                                Condiciones de uso diferentes a las especificadas en el manual del usuario o
                                instalación de software no autorizado.
                            </li>
                            <li>
                                <span class="font-semibold text-foreground">Alteración del equipo:</span>
                                Eliminación del número de serie, etiqueta o sello de garantía.
                            </li>
                            <li>
                                <span class="font-semibold text-foreground">Olvido del patrón de desbloqueo:</span>
                                La garantía no cubre problemas relacionados con el olvido de contraseñas, patrones
                                de desbloqueo o cualquier medida de seguridad configurada por el usuario que impida
                                el acceso al dispositivo.
                            </li>
                            <li>
                                <span class="font-semibold text-foreground">Equipos a Crédito:</span>
                                Si el equipo fue adquirido bajo un esquema de financiamiento o crédito, el cliente
                                deberá estar al corriente con sus pagos para acceder al servicio de garantía. La
                                falta de pagos anula la cobertura.
                            </li>
                        </ul>
                    </section>

                    <Separator class="my-2" />

                    <!-- Vigencia -->
                    <section class="space-y-2">
                        <h3 class="text-lg font-semibold">Vigencia de la Garantía</h3>
                        <p class="text-sm leading-relaxed text-muted-foreground">
                            La duración de la garantía dependerá de la política del proveedor y será de
                            <span class="font-semibold text-foreground">6 meses</span> o
                            <span class="font-semibold text-foreground">1 año</span> a partir de la fecha de
                            compra. El plazo no se extiende por reparaciones realizadas bajo garantía.
                        </p>
                    </section>

                    <Separator class="my-2" />

                    <!-- Proceso -->
                    <section class="space-y-3">
                        <h3 class="text-lg font-semibold">Proceso para Reclamar la Garantía</h3>
                        <ol class="list-decimal pl-5 space-y-2 text-sm leading-relaxed text-muted-foreground">
                            <li>
                                El cliente debe notificar al proveedor sobre el problema dentro del período de
                                garantía.
                            </li>
                            <li>
                                El equipo deberá ser entregado en un centro autorizado junto con la documentación
                                requerida.
                            </li>
                            <li>
                                El diagnóstico inicial se realizará en un plazo estimado de
                                <span class="font-semibold text-foreground">10 días hábiles</span>.
                            </li>
                            <li>
                                El tiempo total para la resolución del caso será de
                                <span class="font-semibold text-foreground">10 a 45 días naturales</span>,
                                dependiendo de la disponibilidad de repuestos y/o autorización del fabricante.
                            </li>
                        </ol>
                    </section>
                </CardContent>
            </Card>
        </div>


    </div>
    <div class="my-4">
        <div class="flex items-center gap-2 text-green-600 mb-4">
            <Handshake :size="32" />
            <h3 class="text-xl font-semibold">Terminos y condiciones</h3>
        </div>
        <div class="bg-white rounded-lg border p-6 space-y-4">


            <!-- Header -->
            <section class="space-y-4">
                <h2 class="text-lg font-semibold text-center">
                    Términos y Condiciones para la Adquisición de Equipos Celulares a Crédito
                </h2>

                <Separator class="my-2" />

                <div class="space-y-3 text-sm leading-relaxed text-muted-foreground">
                    <p>
                        Al aceptar estos Términos y Condiciones, usted ("el Cliente") reconoce y
                        acepta las siguientes disposiciones relacionadas con la adquisición de equipos
                        celulares a crédito.
                    </p>


                    <p>
                        <span class="font-semibold text-foreground">Cliente:</span>

                        {{ authStore.credit?.client?.full_name }}

                    </p>
                    <p>
                        <span class="font-semibold text-foreground">Fecha de Aceptación:</span>
                        {{ dayjs(authStore.credit?.created_at).format('DD/MM/YYYY HH:mm') }}
                    </p>
                    <p>
                        <span class="font-semibold text-foreground">Número de Serie del Equipo:</span>
                        {{ authStore.credit?.device?.imei }}
                    </p>

                    <p class="font-semibold text-foreground">
                        Al adquirir el crédito para este Equipo, el Cliente declara haber leído,
                        comprendido y aceptado la totalidad de los presentes Términos y Condiciones.
                    </p>
                </div>
            </section>

            <Separator class="my-2" />

            <!-- 1 -->
            <section class="space-y-2">
                <h3 class="text-base font-semibold">1. Objeto del Contrato</h3>
                <p class="text-sm leading-relaxed text-muted-foreground">
                    El presente contrato tiene por objeto establecer los términos y condiciones bajo
                    los cuales el Cliente adquiere un equipo celular mediante un esquema de pagos a
                    crédito.
                </p>
            </section>

            <Separator class="my-2" />

            <!-- Pagos -->
            <section class="space-y-3">
                <h3 class="text-base font-semibold">Pagos y Plazos</h3>
                <ul class="text-sm leading-relaxed text-muted-foreground space-y-2">
                    <li>
                        El Cliente se compromete a realizar los pagos acordados por la adquisición
                        del Equipo en las fechas y montos establecidos en el plan de pagos. El
                        incumplimiento de los pagos en las fechas estipuladas generará las
                        consecuencias descritas en la cláusula 3.
                    </li>
                </ul>
            </section>

            <Separator class="my-2" />

            <!-- 3 -->
            <section class="space-y-3">
                <h3 class="text-base font-semibold">
                    3. Consecuencias por Atraso en Pagos y Bloqueo del Equipo
                </h3>
                <ul class="text-sm leading-relaxed text-muted-foreground space-y-2">
                    <li>
                        En caso de que el Cliente se atrase en el pago de cualquiera de las cuotas
                        acordadas, el Vendedor tendrá la facultad de bloquear el funcionamiento del
                        Equipo de forma remota. Este bloqueo podrá inhabilitar parcial o totalmente
                        las funciones del Equipo, incluyendo, pero no limitado a, llamadas,
                        mensajes, acceso a internet y uso de aplicaciones, hasta que el Cliente
                        regularice su situación de pago.
                    </li>
                </ul>
            </section>

            <Separator class="my-2" />

            <!-- 4 -->
            <section class="space-y-3">
                <h3 class="text-base font-semibold">
                    4. Permanencia de la Aplicación de Bloqueo y Prohibición de Venta
                </h3>

                <p class="text-sm leading-relaxed text-muted-foreground">
                    La aplicación utilizada para el bloqueo del Equipo permanecerá instalada en el
                    mismo y no será retirada hasta la liquidación total del saldo adeudado por la
                    adquisición de este Equipo. Asimismo, si el Cliente tuviera otros equipos
                    celulares adquiridos a crédito con el Vendedor y presentara adeudos en
                    cualquiera de ellos, la aplicación de bloqueo no será retirada de ningún Equipo
                    hasta que todos los adeudos sean liquidados en su totalidad. El Vendedor se
                    reserva el derecho de bloquear cualquier Equipo asociado a la cuenta del Cliente
                    si existiera algún adeudo pendiente en cualquiera de los contratos de crédito.
                </p>

                <Separator class="my-2" />

                <p class="text-sm leading-relaxed text-muted-foreground">
                    Además, el Cliente reconoce y acepta que la venta, traspaso, donación o
                    cualquier otra forma de enajenación del Equipo a terceros está estrictamente
                    prohibida mientras la aplicación de bloqueo permanezca instalada en el Equipo.
                    El Equipo no es considerado de plena propiedad del Cliente hasta que se haya
                    liquidado el total del adeudo y la aplicación de bloqueo haya sido retirada.
                    Cualquier intento de venta o traspaso antes de la liquidación total del adeudo
                    podría resultar en la rescisión del contrato y las acciones legales
                    correspondientes.
                </p>
            </section>

            <Separator class="my-2" />

            <!-- 7 -->
            <section class="space-y-2">
                <h3 class="text-base font-semibold">7. Protección de Datos Personales</h3>
                <p class="text-sm leading-relaxed text-muted-foreground">
                    El Cliente autoriza al Vendedor a utilizar sus datos personales para fines
                    relacionados con la gestión del crédito, cobranza y el cumplimiento de este
                    contrato, de acuerdo con la legislación vigente en materia de protección de
                    datos.
                </p>
            </section>

            <Separator class="my-2" />

            <!-- 7 (repetido tal cual) -->
            <section class="space-y-2">
                <h3 class="text-base font-semibold">7. Protección de Datos Personales</h3>
                <p class="text-sm leading-relaxed text-muted-foreground">
                    El Cliente autoriza al Vendedor a utilizar sus datos personales para fines
                    relacionados con la gestión del crédito, cobranza y el cumplimiento de este
                    contrato, de acuerdo con la legislación vigente en materia de protección de
                    datos.
                </p>
            </section>

        </div>


    </div>
</template>