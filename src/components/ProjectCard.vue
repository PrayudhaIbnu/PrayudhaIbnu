<template>
  <article
    class="group relative flex h-full w-full max-w-sm flex-col overflow-hidden rounded-xl shadow-xl bg-white/50 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
    <!-- Image -->
    <div class="relative h-44 w-full overflow-hidden">
      <img
        :src="project.image"
        :alt="project.title"
        class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />

      <!-- Overlay -->
      <div
        class="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <!-- Preview -->
      <button
        @click="$emit('preview', project)"
        class="absolute bottom-3 left-3 translate-y-3 rounded-md bg-white/90 px-3 py-1.5 text-[10px] font-semibold text-slate-800 opacity-0 backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-white active:scale-95">
        Preview
      </button>
    </div>

    <!-- Content -->
    <div class="flex flex-1 flex-col justify-between p-4">
      <div class="space-y-1.5">
        <h4 class="text-sm font-bold tracking-tight text-gray-900 line-clamp-2">
          <span class="">{{ project.title }}</span>
        </h4>

        <p class="text-xs leading-relaxed text-slate-600 line-clamp-2">
          {{ project.description }}
        </p>
      </div>

      <!-- Tech -->
      <div class="mt-3 flex flex-wrap gap-1.5">
        <span
          v-for="tech in project.tech"
          :key="tech"
          class="rounded-md bg-white/10 backdrop-blur px-2 py-0.5 text-[9px] font-medium text-slate-600 ring-1 ring-inset ring-slate-200">
          {{ tech }}
        </span>
      </div>
    </div>
  </article>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
});

defineEmits(["preview"]);
</script>
