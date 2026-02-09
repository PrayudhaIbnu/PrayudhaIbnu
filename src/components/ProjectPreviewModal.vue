<template>
  <div
    class="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 p-4 backdrop-blur-md transition-all"
    @click.self="$emit('close')">
    <div
      class="relative w-full max-w-2xl overflow-hidden rounded-[2rem] bg-white shadow-2xl ring-1 ring-slate-200">
      <!-- Close Button -->
      <button
        @click="$emit('close')"
        class="absolute right-6 top-6 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-500 shadow-lg backdrop-blur-sm transition-all hover:scale-110 hover:text-slate-900">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <!-- Hero Image -->
      <div class="relative h-64 w-full overflow-hidden sm:h-80">
        <img
          :src="project.image"
          :alt="project.title"
          class="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
        <div
          class="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
      </div>

      <!-- Content Container -->
      <div class="relative -mt-10 bg-white px-8 pb-10 pt-6">
        <div class="flex flex-wrap gap-2 mb-4">
          <span
            v-for="tech in project.tech"
            :key="tech"
            class="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500 ring-1 ring-slate-200">
            {{ tech }}
          </span>
        </div>

        <h3
          class="text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">
          {{ project.title }}
        </h3>

        <p class="mt-4 text-lg leading-relaxed text-slate-600">
          {{ project.description }}
        </p>

        <!-- Actions -->
        <div class="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            v-if="project.demo"
            :href="project.demo"
            target="_blank"
            class="flex items-center justify-center gap-2 rounded-2xl bg-red-600 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-slate-800 hover:shadow-xl active:scale-95 sm:flex-1">
            <span>Live Preview</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>

          <a
            v-if="project.github"
            :href="project.github"
            target="_blank"
            class="flex items-center justify-center rounded-2xl border-2 border-slate-200 px-8 py-4 text-sm font-bold text-slate-700 transition-all hover:border-slate-900 hover:bg-slate-50 active:scale-95 sm:flex-1">
            View Source Code
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
});
defineEmits(["close"]);
</script>
