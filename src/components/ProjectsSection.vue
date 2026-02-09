<template>
  <section
    id="projects"
    class="relative overflow-hidden bg-gradient-to-br from-blue-100 via-gray-50 to-red-200 py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-x-16 gap-y-16 lg:grid-cols-12">
        <!-- Header Content -->
        <header
          class="animate-fade-in-up lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
          <div class="mb-4 flex items-center gap-2">
            <span class="h-px w-8 bg-red-600" />
            <span
              class="text-sm font-bold uppercase tracking-widest text-red-600">
              portfolio
            </span>
          </div>

          <h2
            class="mt-6 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
            Selected <span class="text-red-600">Projects</span>
          </h2>
          <div class="mt-6 h-1 w-12 rounded-full bg-red-600/80"></div>
          <p class="mt-6 text-lg leading-8 text-slate-600">
            Showcasing digital experiences built with precision, focusing on
            performance and user-centric design.
          </p>

          <div class="mt-10 flex items-center gap-x-6">
            <a
              href="#contact"
              class="group flex items-center gap-x-2 text-sm font-bold leading-6 text-slate-900 transition-colors hover:text-red-600">
              Start a conversation
              <span
                class="transition-transform group-hover:translate-x-1"
                aria-hidden="true">
                &rarr;
              </span>
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
              <div class="h-1 w-full rounded-full bg-slate-200 overflow-hidden">
                <div
                  class="h-full bg-red-600 transition-all duration-200"
                  :style="{ width: scrollProgress + '%' }" />
              </div>
            </div>

            <!-- Modern CTA Card -->
            <div
              class="animate-fade-in group flex w-[85%] sm:w-[70%] md:w-[420px] shrink-0 snap-start flex-col items-center justify-center rounded-[2.5rem] border border-dashed border-slate-300 bg-white/60 p-10 text-center backdrop-blur-sm transition-all hover:border-red-300 hover:bg-white"
              :style="{ animationDelay: `${projects.length * 150}ms` }">
              <div
                class="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white transition-transform group-hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6v12m6-6H6" />
                </svg>
              </div>
              <p class="mt-4 text-lg font-semibold text-slate-900">
                Interested in more?
              </p>
              <p class="mt-1 text-sm text-slate-500">
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
