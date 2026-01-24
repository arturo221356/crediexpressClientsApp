<script
    setup
    lang="ts"
>
    import { ref } from 'vue'
    import { RouterLink, RouterView } from 'vue-router'
    import { Info, ShieldCheck, CreditCard, Menu, X } from 'lucide-vue-next'

    const mobileMenuOpen = ref(false)

    const routes = [
        { path: '/informacion', name: 'Información', icon: Info },
        // { path: '/garantia', name: 'Garantía', icon: ShieldCheck },
        { path: '/pagar', name: 'Pagar', icon: CreditCard }
    ]

    const closeMobileMenu = () => {
        mobileMenuOpen.value = false
    }
</script>

<template>

    <div class="min-h-screen bg-slate-100 flex flex-col min-w-screen">
        <!-- Header -->
        <header class="bg-white border-b sticky top-0 z-50">
            <div class="px-4 md:px-8">
                <div class="flex items-center justify-between h-16">
                    <div class="flex items-center gap-2">
                        <CreditCard
                            class="text-slate-900"
                            :size="28"
                        />
                        <h1 class="text-xl font-bold text-slate-900">CrediExpress</h1>
                    </div>

                    <!-- Desktop Navigation -->
                    <nav class="hidden md:flex gap-1">
                        <RouterLink
                            v-for="route in routes"
                            :key="route.path"
                            :to="route.path"
                            class="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors"
                            active-class="bg-slate-900 text-white"
                            inactive-class="text-slate-600 hover:bg-slate-100"
                        >
                            <component
                                :is="route.icon"
                                :size="18"
                            />
                            <span>{{ route.name }}</span>
                        </RouterLink>
                    </nav>

                    <!-- Mobile Menu Button -->
                    <button
                        @click="mobileMenuOpen = !mobileMenuOpen"
                        class="md:hidden p-2 hover:bg-slate-100 rounded-lg"
                    >
                        <X
                            v-if="mobileMenuOpen"
                            :size="24"
                        />
                        <Menu
                            v-else
                            :size="24"
                        />
                    </button>
                </div>

                <!-- Mobile Navigation -->
                <nav
                    v-if="mobileMenuOpen"
                    class="md:hidden py-4 space-y-2"
                >
                    <RouterLink
                        v-for="route in routes"
                        :key="route.path"
                        :to="route.path"
                        @click="closeMobileMenu"
                        class="w-full flex items-center gap-2 px-4 py-3 rounded-lg transition-colors"
                        active-class="bg-slate-900 text-white"
                        inactive-class="text-slate-600 hover:bg-slate-100"
                    >
                        <component
                            :is="route.icon"
                            :size="18"
                        />
                        <span>{{ route.name }}</span>
                    </RouterLink>
                </nav>
            </div>
        </header>

        <!-- Main Content -->
        <main class="flex-1 px-4 md:px-8 py-8 pb-24 md:pb-8">
            <RouterView />
        </main>

        <!-- Bottom Navigation (Mobile) -->
        <nav class="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t">
            <div class="grid grid-cols-3">
                <RouterLink
                    v-for="route in routes"
                    :key="route.path"
                    :to="route.path"
                    class="flex flex-col items-center gap-1 py-3 transition-colors text-slate-400"
                    active-class="text-slate-800"
                >

                    <component
                        :is="route.icon"
                        :size="20"
                    />
                    <span class="text-xs">{{ route.name }}</span>
                </RouterLink>
            </div>
        </nav>
    </div>
</template>