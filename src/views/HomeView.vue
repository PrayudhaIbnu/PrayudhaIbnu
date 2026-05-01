<template>
  <div class="relative flex">
    <nav class="fixed left-10 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
      <div class="relative flex flex-col items-center">
        <!-- Vertical Gradient Track -->
        <div
          class="absolute h-full w-[2px] bg-gradient-to-b from-white/40 via-white/20 to-white/40 backdrop-blur-sm"></div>

        <ul class="flex flex-col gap-10">
          <li
            v-for="section in sections"
            :key="section.id"
            class="group relative flex items-center">
            <!-- Modern Glass Tooltip -->
            <span
              class="absolute left-12 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-medium opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 shadow-lg whitespace-nowrap pointer-events-none">
              {{ section.label }}
            </span>

            <!-- Navigation Dot -->
            <a
              :href="'#' + section.id"
              class="relative flex items-center justify-center w-6 h-6 rounded-full transition-all duration-500"
              :class="
                activeSection === section.id
                  ? 'bg-gradient-to-br from-teal-400 to-cyan-500 shadow-lg shadow-cyan-500/40 scale-110'
                  : 'bg-white/20 border border-white/30 hover:bg-white/30'
              ">
              <!-- Glow Ring -->
              <span
                v-if="activeSection === section.id"
                class="absolute inset-0 rounded-full bg-cyan-400 blur-md opacity-40">
              </span>

              <!-- Inner Dot -->
              <div
                class="w-2 h-2 rounded-full transition-all duration-300"
                :class="
                  activeSection === section.id
                    ? 'bg-white'
                    : 'bg-white/40 group-hover:bg-white'
                "></div>
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <main class="w-full">
      <HeroSection id="hero" />
      <AboutSection id="about" />
      <SkillsSection id="skills" />
      <ProjectsSection id="projects" />
      <Promotion id="promotion" />
      <ContactSection id="contact" />
    </main>
  </div>

  <Footer />
</template>

<script setup>
import { ref, onMounted } from "vue";
import HeroSection from "@/components/HeroSection.vue";
import AboutSection from "@/components/AboutSection.vue";
import SkillsSection from "@/components/SkillsSection.vue";
import ProjectsSection from "@/components/ProjectsSection.vue";
import Promotion from "@/components/Promotion.vue";
import ContactSection from "@/components/ContactSection.vue";
import Footer from "@/components/ui/Footer.vue";

const sections = [
  { id: "hero", label: "Hi!" },
  { id: "about", label: "About Me" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "promotion", label: "Let's Work Together" },
  { id: "contact", label: "Get In Touch" },
];

const activeSection = ref("hero");

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) activeSection.value = entry.target.id;
      });
    },
    { threshold: 0.5 },
  );

  sections.forEach((section) => {
    const el = document.getElementById(section.id);
    if (el) observer.observe(el);
  });
});
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
