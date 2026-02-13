<template>
  <div
    class="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xl p-4 transition-all"
    @click.self="$emit('close')">
    <!-- Floating Card -->
    <div
      class="relative w-full max-w-3xl overflow-hidden rounded-[2.5rem] bg-cyan-600/60 backdrop-blur-2xl border border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.4)] text-white">
      <!-- Close Button -->
      <button
        @click="$emit('close')"
        class="absolute right-6 top-6 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/40 backdrop-blur text-gray-600/80 transition-all duration-300 hover:bg-white hover:text-black hover:scale-110">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 20 20">
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 0 1 1.414 0L10 8.586l4.293-4.293a1 1 0 1 1 1.414 1.414L11.414 10l4.293 4.293a1 1 0 0 1-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L8.586 10L4.293 5.707a1 1 0 0 1 0-1.414"
            clipRule="evenodd" />
        </svg>
      </button>

      <!-- Hero Image -->
      <div class="relative h-72 w-full overflow-hidden">
        <img
          :src="project.image"
          :alt="project.title"
          class="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />

        <!-- Dark Overlay -->
        <div
          class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

        <!-- Title Overlay -->
        <div class="absolute bottom-6 left-8 right-8">
          <h3 class="text-3xl md:text-4xl font-extrabold leading-tight">
            {{ project.title }}
          </h3>
        </div>
      </div>

      <!-- Content -->
      <div class="px-8 py-10">
        <!-- Tech Stack -->
        <div class="flex flex-wrap gap-3 mb-6">
          <span
            v-for="tech in project.tech"
            :key="tech"
            class="rounded-full bg-gray-600/30 border border-white/20 px-4 py-1 text-xs font-semibold tracking-wide text-white/80 backdrop-blur">
            {{ tech }}
          </span>
        </div>

        <!-- Description -->
        <p class="text-base md:text-lg leading-relaxed text-white/80">
          {{ project.description }}
        </p>

        <!-- Buttons -->
        <div class="mt-10 flex flex-col gap-4 sm:flex-row">
          <!-- Live Preview -->
          <a
            v-if="project.demo"
            :href="project.demo"
            target="_blank"
            class="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-slate-900 px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/40 active:scale-95">
            Live Preview →
          </a>

          <!-- Github -->
          <a
            v-if="project.github"
            :href="project.github"
            target="_blank"
            class="flex flex-1 items-center justify-center rounded-2xl border border-white/30 px-8 py-4 text-sm font-semibold text-white/90 transition-all duration-300 hover:bg-white hover:text-black active:scale-95">
            View Source
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
