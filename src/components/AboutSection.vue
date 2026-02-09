<template>
  <section
    id="about"
    class="py-24 bg-slate-50 overflow-hidden bg-gradient-to-br from-yellow-100/50 via-gray-50 to-green-200">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Image Side with Decorative Elements -->
        <div class="relative group animate-fade-in-up">
          <!-- Decorative Background Circle -->
          <div
            class="absolute -top-10 -left-10 w-40 h-40 bg-green-200/50 rounded-full blur-3xl animate-pulse"></div>

          <div
            class="relative bg-white p-3 rounded-2xl shadow-xl transform transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl max-w-sm mx-auto z-10">
            <img
              src="../assets/image/Adobe Express - file.png"
              alt="About Me"
              class="w-full h-auto rounded-xl object-cover aspect-[4/5]" />
          </div>
          <!-- Floating Badge -->
          <div
            class="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block border border-slate-100 transition-all duration-500 hover:scale-105 z-20 animate-float">
            <div class="flex items-center gap-4">
              <div
                class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-green-700"
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
                <p class="text-sm font-bold text-slate-900">
                  Available for Hire
                </p>
                <p class="text-xs text-slate-500">Freelance Developer</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Content Side -->
        <div class="space-y-8 animate-fade-in-right">
          <div>
            <span
              class="inline-block px-4 py-1.5 mb-4 text-sm font-semibold tracking-wider text-green-700 uppercase bg-green-100 rounded-full transition-all duration-300 hover:bg-green-200 animate-bounce-subtle">
              My Story
            </span>
            <h3
              class="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Crafting Digital
              <span
                class="text-green-700 transition-colors duration-300 hover:text-green-600"
                >Experiences</span
              >
            </h3>
          </div>

          <div class="space-y-4 text-lg text-slate-700 leading-relaxed">
            <p class="transition-all duration-500 hover:translate-x-2">
              I’m a freelance web developer who focuses on building fast,
              responsive, and user-friendly websites. I enjoy turning complex
              problems into simple, beautiful interfaces.
            </p>
            <p class="transition-all duration-500 hover:translate-x-2">
              I usually work with modern technologies like
              <span
                class="font-semibold text-slate-900 border-b-2 border-green-200 hover:border-green-500 transition-colors duration-300"
                >Vue, Tailwind, and REST APIs</span
              >
              to deliver scalable and maintainable web solutions that help
              businesses grow.
            </p>
          </div>
          <!-- ACTION BUTTON -->
          <div class="pt-4 flex flex-wrap justify-end gap-4">
            <a
              href="/cv/Prayudha_Ibnu_CV.pdf"
              download
              class="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-green-700 text-white font-semibold shadow-md transition-all duration-300 hover:bg-green-800 hover:-translate-y-1 hover:shadow-xl">
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

<style scoped>
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
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes bounceSubtle {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-3px);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 1s ease-out forwards;
}

.animate-fade-in-right {
  animation: fadeInRight 1s ease-out 0.2s forwards;
  opacity: 0;
}

.animate-float {
  animation: float 4s ease-in-out infinite;
}

.animate-bounce-subtle {
  animation: bounceSubtle 2s ease-in-out infinite;
}
</style>
