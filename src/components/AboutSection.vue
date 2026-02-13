<template>
  <section
    id="about"
    class="relative py-28 overflow-hidden bg-gradient-to-tl from-cyan-600 via-cyan-600 to-green-300 text-white">
    <!-- Overlay -->
    <!-- <div class="absolute inset-0 bg-black/25"></div> -->

    <div class="relative max-w-7xl mx-auto px-6">
      <div class="grid lg:grid-cols-2 gap-20 items-center">
        <!-- Image Side -->
        <div class="relative group">
          <!-- Glow Blob -->
          <div
            class="absolute -top-16 -left-16 w-56 h-56 bg-green-300/30 rounded-full blur-3xl animate-pulse"></div>

          <!-- Image Card -->
          <div
            class="relative bg-white/10 backdrop-blur p-3 rounded-3xl border border-white/20 shadow-2xl max-w-sm mx-auto transition-all duration-500 hover:-translate-y-2">
            <img
              src="../assets/image/Adobe Express - file.png"
              alt="About Me"
              class="w-full h-auto rounded-2xl object-cover aspect-[4/5]" />
          </div>

          <!-- Floating Badge -->
          <div
            class="absolute -bottom-6 -right-6 hidden md:block bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-5 shadow-xl animate-float">
            <div class="flex items-center gap-4">
              <div
                class="w-12 h-12 bg-green-400/50 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-green-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p class="text-sm font-bold text-white">Available for Hire</p>
                <p class="text-xs text-white/80">Freelance Developer</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Content Side -->
        <div class="space-y-8">
          <div>
            <span
              class="inline-block px-4 py-1.5 mb-5 text-sm font-bold tracking-wider uppercase rounded-full bg-white/20 backdrop-blur border border-white/20">
              About Me
            </span>

            <h3 class="text-4xl md:text-5xl font-extrabold tracking-tight">
              <span class="text-green-600 bg-white rounded-xl px-3 py-1"
                >Crafting Digital</span
              >
              <span
                class="relative inline-block before:rounded-xl before:absolute before:-inset-1 before:block before:-skew-y-1 before:bg-white mt-5">
                <span class="relative text-cyan-600 px-3 py-1"
                  >Experiences</span
                >
              </span>
            </h3>
          </div>

          <div class="space-y-5 text-lg text-white/90 leading-relaxed">
            <p>
              I’m a freelance web developer who builds
              <span class="font-semibold text-white">
                fast, responsive, and modern
              </span>
              websites with strong focus on performance and usability.
            </p>
            <p>
              I work with technologies like
              <span
                class="font-semibold text-white underline decoration-white/40">
                Vue, Tailwind, and REST APIs
              </span>
              to deliver scalable solutions that help brands grow and convert.
            </p>
          </div>

          <!-- Action -->
          <div class="pt-6 flex justify-end">
            <a
              href="/cv/Prayudha_Ibnu_CV.pdf"
              download
              class="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-slate-900 text-white font-bold shadow-xl hover:bg-slate-800 hover:-translate-y-1 transition-all duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" />
              </svg>
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
