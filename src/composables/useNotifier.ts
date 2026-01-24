// composables/useNotifier.ts

import { AlertTriangle, CheckCircle, Info, XCircle } from 'lucide-vue-next'
import { h } from 'vue'
import { toast } from 'vue-sonner'
import type { Component } from 'vue'

export function useNotifier() {
  function showToast(
    variant: 'success' | 'error' | 'warning' | 'info',
    message: string,
    description?: string,
  ) {
    toast.custom(
      (t) =>
        h('div', { class: getVariantClasses(variant) }, [
          h('div', { class: 'mr-2' }, [h(getVariantIcon(variant), { size: 22 })]),
          h('div', { class: 'flex-1' }, [
            h('strong', { class: 'block' }, message),
            description ? h('div', { class: 'text-xs opacity-80 mt-1' }, description) : null,
          ]),
        ]),
      {
        duration: 4000, // Agregar duración explícita
      },
    )
  }

  function getVariantClasses(variant: string): string {
    const base = 'flex items-center px-4 py-3 rounded-lg shadow-lg font-medium max-w-sm'
    switch (variant) {
      case 'success':
        return `${base} bg-emerald-50 text-emerald-700 border border-emerald-200`
      case 'error':
        return `${base} bg-rose-50 text-rose-700 border border-rose-200`
      case 'warning':
        return `${base} bg-amber-50 text-amber-700 border border-amber-200`
      case 'info':
      default:
        return `${base} bg-sky-50 text-sky-700 border border-sky-200`
    }
  }

  function getVariantIcon(variant: string): Component {
    switch (variant) {
      case 'success':
        return CheckCircle
      case 'error':
        return XCircle
      case 'warning':
        return AlertTriangle
      case 'info':
      default:
        return Info
    }
  }

  return { showToast }
}
