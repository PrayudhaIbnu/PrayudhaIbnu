<template>
  <section
    id="skills"
    class="relative overflow-hidden py-28 bg-cyan-600 text-white">
    <!-- Overlay -->
    <!-- <div class="absolute inset-0 bg-black/30"></div>?? -->

    <!-- Subtle Pattern -->
    <div
      class="pointer-events-none absolute inset-0 opacity-[0.04]"
      :style="backgroundPattern" />

    <div class="relative z-10 mx-auto max-w-7xl px-6">
      <!-- Header -->
      <header class="mb-16 max-w-2xl">
        <div class="mb-4 flex items-center gap-3">
          <span class="h-px w-10 bg-white/60" />
          <span
            class="text-sm font-bold uppercase tracking-widest text-white/60">
            Expertise
          </span>
        </div>

        <h3
          class="text-4xl inline-flex gap-3 items-center md:text-5xl font-extrabold tracking-tight">
          <span class="text-green-600 bg-white rounded-xl px-3 py-1"
            >Technical</span
          >
          <span
            class="relative inline-block before:rounded-xl before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-white">
            <span class="relative text-cyan-600 px-3 py-1">Skills</span>
          </span>
        </h3>

        <p class="mt-5 font-semibold text-lg text-white/60">
          Tools & technologies I use to craft fast, scalable, and modern web
          applications.
        </p>
      </header>

      <!-- Skills Grid -->
      <TransitionGroup
        tag="div"
        name="skill-list"
        class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="(skill, index) in visibleSkills"
          :key="skill.name"
          :style="{ transitionDelay: `${index * 60}ms` }"
          class="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 backdrop-blur p-7 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
          <!-- Glow -->
          <div
            class="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-green-300/30 opacity-0 blur-3xl transition group-hover:opacity-100" />

          <div class="relative z-10 mb-6 flex items-center justify-between">
            <div
              class="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/70 backdrop-blur transition group-hover:scale-110">
              <img :src="skill.icon" :alt="skill.name" class="h-8 w-8" />
            </div>

            <span
              class="rounded-lg bg-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
              {{ skill.level }}
            </span>
          </div>

          <h4 class="text-lg font-bold text-white">
            {{ skill.name }}
          </h4>

          <p v-if="skill.description" class="mt-1 text-xs text-white/80">
            {{ skill.description }}
          </p>

          <div
            class="mt-4 h-1.5 w-0 rounded-full bg-green-300 transition-all duration-500 group-hover:w-24" />
        </article>
      </TransitionGroup>

      <!-- Show More -->
      <div class="mt-16 flex justify-center">
        <button
          @click="showAll = !showAll"
          class="rounded-full border border-white/40 px-8 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-slate-900 hover:border-slate-900 hover:-translate-y-1">
          {{ showAll ? "Show Less" : "Show More" }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from "vue";

const showAll = ref(false);
const limit = 3;

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
