<template>
  <div class="relative flex">
    <nav class="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
      <div class="relative flex flex-col items-center">
        <!-- Vertical Track -->
        <div class="absolute h-full w-0.5 bg-gray-200 -z-10"></div>

        <ul class="flex flex-col gap-8">
          <li
            v-for="section in sections"
            :key="section.id"
            class="group relative flex items-center">
            <!-- Tooltip Label -->
            <span
              class="absolute left-10 px-3 py-1.5 rounded-lg bg-gray-900 text-white text-xs font-semibold opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 shadow-xl whitespace-nowrap pointer-events-none after:content-[''] after:absolute after:right-full after:top-1/2 after:-translate-y-1/2 after:border-8 after:border-transparent after:border-r-gray-900">
              {{ section.label }}
            </span>

            <!-- Stepper Dot -->
            <a
              :href="'#' + section.id"
              class="relative flex items-center justify-center w-5 h-5 rounded-full transition-all duration-500"
              :class="
                activeSection === section.id
                  ? 'bg-gray-600 shadow-lg shadow-gray-200 scale-110'
                  : 'bg-white border-2 border-gray-300 hover:border-gray-400'
              ">
              <!-- Pulsing effect for active section -->
              <span
                v-if="activeSection === section.id"
                class="absolute inset-0 rounded-full bg-gray-600 animate-ping opacity-20"></span>

              <!-- Inner Dot -->
              <div
                class="w-1.5 h-1.5 rounded-full transition-all duration-300"
                :class="
                  activeSection === section.id
                    ? 'bg-white'
                    : 'bg-transparent group-hover:bg-gray-300'
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
      <!-- <Promotion id="promotion" /> -->
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
import Footer from "@/components/Footer.vue";

const sections = [
  { id: "hero", label: "Hero" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "promotion", label: "Promotion" },
  { id: "contact", label: "Contact" },
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
