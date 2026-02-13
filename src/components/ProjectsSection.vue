<template>
  <section
    id="projects"
    class="relative overflow-hidden bg-gradient-to-br from-cyan-600 via-cyan-600 to-green-300 py-24 sm:py-32 text-white">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-x-16 gap-y-16 lg:grid-cols-12">
        <!-- Header Content -->
        <header
          class="relative z-10 lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
          <div class="mb-4 flex items-center gap-3">
            <span class="h-px w-8 bg-white/60" />
            <span
              class="text-sm font-bold uppercase tracking-widest text-white/80">
              Portfolio
            </span>
          </div>

          <h2 class="text-4xl md:text-5xl font-extrabold tracking-tight">
            <span
              class="relative inline-block before:rounded-xl before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-white mb-6">
              <span class="relative text-cyan-600 px-3 py-1">Selected</span>
            </span>
            <span class="text-green-600 bg-white rounded-xl px-3 py-1 ml-3"
              >Projects</span
            >
          </h2>

          <div class="mt-6 h-1 w-12 rounded-full bg-white/70"></div>

          <p class="mt-6 text-lg leading-8 text-white/90">
            A collection of digital experiences focused on performance,
            scalability, and user-centric design.
          </p>

          <div class="mt-10">
            <a
              href="#contact"
              class="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-green-200 transition">
              Start a conversation
              <span class="transition-transform group-hover:translate-x-1"
                >→</span
              >
            </a>
          </div>
        </header>

        <!-- Project Slider -->
        <div class="animate-fade-in-right lg:col-span-8">
          <div
            class="no-scrollbar -mx-6 flex gap-6 overflow-x-auto px-6 pb-10 scroll-smooth snap-x snap-mandatory sm:gap-8 lg:mx-0 lg:px-0">
            <ProjectCard
              v-for="(project, index) in projects"
              :key="project.title"
              :project="project"
              @preview="openPreview"
              :style="{ animationDelay: `${index * 150}ms` }"
              class="animate-fade-in snap-start w-[85%] sm:w-[70%] md:w-[420px] shrink-0 transition-transform duration-300 hover:-translate-y-2" />

            <!-- Scroll Indicator (mobile only) -->
            <div class="mt-4 block lg:hidden">
              <div class="h-1 w-full rounded-full bg-white/30 overflow-hidden">
                <div
                  class="h-full bg-gradient-to-r from-white to-green-300 transition-all"
                  :style="{ width: scrollProgress + '%' }" />
              </div>
            </div>

            <!-- Modern CTA Card -->
            <div
              class="group flex w-[85%] sm:w-[70%] md:w-[420px] shrink-0 snap-start flex-col items-center justify-center rounded-[2.5rem] border border-white/30 bg-white/10 backdrop-blur p-10 text-center transition-all hover:border-green-300 hover:bg-white/20">
              <div
                class="flex h-14 w-14 items-center justify-center rounded-full bg-slate-900 text-white transition-transform group-hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6v12m6-6H6" />
                </svg>
              </div>

              <p class="mt-4 text-lg font-semibold text-white">
                Interested in more?
              </p>
              <p class="mt-1 text-sm text-white/80">
                Let’s build something together
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- MODAL PREVIEW -->
    <ProjectPreviewModal
      v-if="activeProject"
      :project="activeProject"
      @close="activeProject = null" />
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import ProjectCard from "@/components/ProjectCard.vue";
import ProjectPreviewModal from "@/components/ProjectPreviewModal.vue";
import { projects } from "@/data/projects";

const activeProject = ref(null);

const openPreview = (project) => {
  activeProject.value = project;
};

const sliderRef = ref(null);
const scrollProgress = ref(0);

const updateScrollProgress = () => {
  const el = sliderRef.value;
  if (!el) return;

  const maxScroll = el.scrollWidth - el.clientWidth;
  scrollProgress.value = maxScroll ? (el.scrollLeft / maxScroll) * 100 : 0;
};

onMounted(() => {
  sliderRef.value?.addEventListener("scroll", updateScrollProgress);
});

onUnmounted(() => {
  sliderRef.value?.removeEventListener("scroll", updateScrollProgress);
});
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  scrollbar-width: none;
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animate-fade-in-right {
  animation: fadeInRight 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animate-fade-in {
  opacity: 0;
  animation: fadeIn 0.8s ease-out forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
