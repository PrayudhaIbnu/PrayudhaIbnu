<template>
  <section
    id="skills"
    class="relative overflow-hidden py-24 bg-gradient-to-tr from-blue-100 via-gray-50 to-green-200">
    <!-- Background Pattern -->
    <div
      class="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
      :style="backgroundPattern" />

    <div class="relative z-10 mx-auto max-w-7xl px-6">
      <!-- Header -->
      <header class="mb-12 max-w-2xl">
        <div class="mb-4 flex items-center gap-2">
          <span class="h-px w-8 bg-blue-600" />
          <span
            class="text-sm font-bold uppercase tracking-widest text-blue-600">
            Expertise
          </span>
        </div>

        <h3 class="text-4xl font-black text-slate-900 md:text-5xl">
          Technical
          <span class="text-blue-600">Skills</span>
        </h3>

        <p class="mt-4 text-lg text-slate-600">
          Tools & technologies I use to build modern, scalable web applications.
        </p>
      </header>

      <!-- Skills Grid with TransitionGroup -->
      <TransitionGroup
        tag="div"
        name="skill-list"
        class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="(skill, index) in visibleSkills"
          :key="skill.name"
          :style="{ transitionDelay: `${index * 50}ms` }"
          class="skill-card group relative overflow-hidden rounded-3xl border bg-white p-7 shadow-sm transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-xl">
          <!-- Glow -->
          <div
            class="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-blue-200 opacity-0 blur-2xl transition group-hover:opacity-100" />

          <div class="relative z-10 mb-6 flex items-center justify-between">
            <div
              class="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 transition group-hover:scale-110">
              <img :src="skill.icon" :alt="skill.name" class="h-8 w-8" />
            </div>

            <span
              class="rounded-lg bg-slate-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">
              {{ skill.level }}
            </span>
          </div>

          <h4 class="text-lg font-bold text-slate-900">
            {{ skill.name }}
          </h4>

          <p v-if="skill.description" class="text-xs text-slate-500">
            {{ skill.description }}
          </p>

          <div
            class="mt-2 h-2 w-0 rounded-full bg-blue-600 transition-all duration-500 group-hover:w-24" />
        </article>
      </TransitionGroup>

      <!-- Show More Button -->
      <div class="mt-12 flex justify-center">
        <button
          @click="showAll = !showAll"
          class="rounded-full border border-slate-300 px-6 py-2 text-sm font-semibold text-slate-700 transition hover:bg-blue-600 hover:text-gray-100">
          {{ showAll ? "Show Less" : "Show More" }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from "vue";

const showAll = ref(false);
const limit = 6;

const visibleSkills = computed(() =>
  showAll.value ? skills : skills.slice(0, limit),
);

const backgroundPattern = {
  backgroundImage: "radial-gradient(#2563eb 0.5px, transparent 0.5px)",
  backgroundSize: "24px 24px",
};

const skills = [
  {
    name: "HTML",
    level: "Advanced",
    icon: "https://api.iconify.design/devicon:html5.svg",
  },
  {
    name: "CSS",
    level: "Advanced",
    icon: "https://api.iconify.design/devicon:css3.svg",
  },
  {
    name: "JavaScript",
    level: "Intermediate",
    icon: "https://api.iconify.design/devicon:javascript.svg",
  },
  {
    name: "Vue.js",
    level: "Intermediate",
    icon: "https://api.iconify.design/devicon:vuejs.svg",
  },
  {
    name: "Tailwind CSS",
    level: "Advanced",
    icon: "https://api.iconify.design/devicon:tailwindcss.svg",
  },
  {
    name: "Bootstrap",
    level: "Advanced",
    icon: "https://api.iconify.design/devicon:bootstrap.svg",
  },
  {
    name: "PHP",
    level: "Advanced",
    icon: "https://api.iconify.design/devicon:php.svg",
  },
  {
    name: "MySql",
    level: "Advanced",
    icon: "https://api.iconify.design/devicon:mysql.svg",
  },
  {
    name: "Laravel",
    level: "Intermediate",
    description: "Backend / Fullstack",
    icon: "https://api.iconify.design/devicon:laravel.svg",
  },
  {
    name: "Supabase",
    level: "Intermediate",
    icon: "https://api.iconify.design/logos:supabase-icon.svg",
  },
  {
    name: "Git",
    level: "Advanced",
    icon: "https://api.iconify.design/devicon:git.svg",
  },
];
</script>

<style scoped>
.skill-list-enter-active,
.skill-list-leave-active {
  transition: all 0.5s ease;
}
.skill-list-enter-from,
.skill-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.skill-list-move {
  transition: transform 0.5s ease;
}
</style>
