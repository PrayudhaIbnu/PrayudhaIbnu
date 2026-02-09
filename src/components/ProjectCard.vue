<template>
  <article
    class="group relative flex flex-col h-full w-full max-w-sm overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-red-100">
    <!-- Image Section -->
    <div class="relative h-44 w-full overflow-hidden">
      <img
        :src="project.image"
        :alt="project.title"
        class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
      <div
        class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

      <!-- Preview Button -->
      <button
        @click="$emit('preview', project)"
        class="absolute bottom-3 left-3 translate-y-4 rounded-md bg-white/90 px-3 py-1.5 text-[10px] font-bold text-slate-900 opacity-0 shadow-lg backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-white active:scale-95">
        Preview Project
      </button>
    </div>

    <!-- Content Section -->
    <div class="flex flex-1 flex-col justify-between p-4">
      <div class="space-y-1.5">
        <h4
          class="text-base font-bold tracking-tight text-slate-900 line-clamp-1">
          {{ project.title }}
        </h4>
        <p class="text-xs leading-relaxed text-slate-600 line-clamp-2">
          {{ project.description }}
        </p>
      </div>

      <div class="mt-3 flex flex-wrap gap-1">
        <span
          v-for="tech in project.tech"
          :key="tech"
          class="rounded bg-slate-100 px-1.5 py-0.5 text-[9px] font-medium text-slate-600 ring-1 ring-inset ring-slate-200">
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
