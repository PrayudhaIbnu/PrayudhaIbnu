<template>
  <article
    class="group relative flex h-full w-full max-w-sm flex-col overflow-hidden rounded-xl shadow-xl bg-white/50 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
    <!-- Image -->
    <div class="relative h-44 w-full overflow-hidden">
      <img
        :src="project.image"
        :alt="project.title"
        class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
      <div class="mt-3 flex justify-between gap-1.5">
        <div class="flex gap-1">
          <span
            v-for="tech in project.tech"
            :key="tech"
            class="rounded-md bg-white/10 backdrop-blur px-2 py-0.5 text-[9px] font-medium text-slate-600 ring-1 ring-inset ring-slate-200">
            {{ tech }}
          </span>
        </div>
        <button
          @click="$emit('preview', project)"
          class="rounded-md bg-white/90 px-2 py-0.5 text-[10px] font-semibold text-slate-800 backdrop-blur hover:bg-white">
          Preview
        </button>
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
