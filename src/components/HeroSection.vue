<template>
  <section
    id="hero"
    class="relative pt-36 pb-40 overflow-hidden bg-gradient-to-bl from-cyan-600 via-cyan-600 to-green-300 text-white">
    <!-- Overlay Glow -->
    <!-- <div class="absolute inset-0 bg-black/25"></div> -->
    <div class="relative max-w-6xl mx-auto px-6 text-center">
      <!-- Badge -->
      <span
        class="inline-flex items-center gap-2 mb-8 px-5 py-2 text-xs font-bold tracking-wider uppercase rounded-full bg-white/20 backdrop-blur border border-white/20">
        <span class="h-2 w-2 rounded-full bg-green-300 animate-pulse"></span>
        Available for New Projects
      </span>

      <!-- Heading -->
      <h1
        class="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
        Hi, I’m
        <span
          class="block text-transparent bg-clip-text bg-gradient-to-r from-white to-green-200">
          Prayudha Ibnu
        </span>
      </h1>

      <!-- Subheading -->
      <p class="mt-6 text-lg md:text-2xl text-white/90 max-w-3xl mx-auto">
        Web Developer focused on building
        <span class="font-semibold text-white">
          fast, modern, and conversion-ready
        </span>
        web applications for brands & businesses.
      </p>

      <!-- CTA -->
      <div
        class="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
        <a
          href="#projects"
          class="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-slate-900 text-white font-bold shadow-2xl hover:bg-slate-800 hover:-translate-y-1 transition-all duration-300">
          View My Projects
          <span class="text-lg">→</span>
        </a>

        <a
          href="#contact"
          class="inline-flex items-center justify-center px-10 py-5 rounded-2xl font-bold border-2 border-white/70 text-white hover:bg-white hover:text-slate-900 transition-all duration-300">
          Let’s Collaborate
        </a>
      </div>
    </div>
  </section>
</template>
