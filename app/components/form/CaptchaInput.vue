<template>
  <div class="space-y-3">
    <p class="text-sm text-slate-600">Kode Captcha</p>

    <div class="flex items-center gap-4">
      <!-- Placeholder gambar captcha -->
      <div
        class="h-12 w-32 bg-slate-100 border border-slate-200 rounded-lg flex items-center justify-center text-xs text-slate-500"
      >
        CAPTCHA
      </div>

      <button
        type="button"
        class="text-sm text-emerald-600 hover:underline"
        @click="$emit('reload')"
      >
        Reload
      </button>
    </div>
    <div
      class="flex items-stretch w-full rounded-xl border border-slate-200 focus-within:ring-2 focus-within:ring-emerald-500 focus-within:border-emerald-500 transition overflow-hidden"
    >
      <!-- INPUT -->
      <input
        type="text"
        placeholder="Masukkan Captcha"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        required
        class="flex-1 px-4 py-3 text-sm outline-none bg-transparent"
      />

      <!-- BUTTON -->
      <button
        type="button"
        class="px-4 flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 transition"
        @click="$emit('reload')"
        aria-label="Reload captcha"
      >
        <i class="fa fa-refresh text-white text-sm"></i>
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  modelValue: String,
});
</script>
