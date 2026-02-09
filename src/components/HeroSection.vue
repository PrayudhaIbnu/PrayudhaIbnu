<template>
  <section
    class="relative pt-32 pb-40 overflow-hidden bg-gradient-to-br from-yellow-100 to-gray-50">
    <!-- Decorative Background Blobs -->
    <div class="max-w-6xl mx-auto px-6 relative">
      <div class="flex flex-col items-center text-center">
        <!-- Badge -->
        <div
          class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-50 border border-yellow-100 mb-8 animate-fade-in">
          <span class="relative flex h-2 w-2">
            <span
              class="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
            <span
              class="relative inline-flex rounded-full h-2 w-2 bg-yellow-600"></span>
          </span>
          <span
            class="text-xs font-bold uppercase tracking-wider text-yellow-700"
            >Available for new projects</span
          >
        </div>

        <!-- Main Heading -->
        <h1
          class="text-6xl md:text-8xl font-black text-gray-900 tracking-tight leading-[1.1] mb-8 animate-fade-in delay-100">
          Hi,
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-gray-900 animate-gradient-x"
            >Guys...</span
          ><br />
        </h1>

        <p
          class="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto leading-relaxed mb-12 animate-fade-in delay-200">
          I'm <span class="font-semibold text-gray-900">PrayudhaIbnu</span>. A
          Web Developer specializing in building high-performance, visually
          stunning web applications.
        </p>

        <!-- CTA Buttons -->
        <div
          class="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in delay-300">
          <a
            href="#projects"
            class="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:scale-105 active:scale-95 shadow-lg overflow-hidden">
            <div
              class="absolute inset-0 w-0 bg-yellow-600 transition-all duration-300 ease-out group-hover:w-full"></div>
            <span class="relative">Explore My Work</span>
          </a>

          <a
            href="#contact"
            class="inline-flex items-center justify-center px-8 py-4 font-bold text-gray-900 transition-all duration-300 bg-transparent border-2 border-gray-900 rounded-xl hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:scale-105 active:scale-95">
            Let's Talk
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

@keyframes gradient-x {
  0%,
  100% {
    background-size: 200% 200%;
    background-position: left center;
  }
  50% {
    background-size: 200% 200%;
    background-position: right center;
  }
}

.animate-fade-in {
  opacity: 0;
  animation: fade-in-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animate-blob {
  animation: blob 7s infinite;
}

.animate-gradient-x {
  animation: gradient-x 3s ease infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

.delay-100 {
  animation-delay: 150ms;
}

.delay-200 {
  animation-delay: 300ms;
}

.delay-300 {
  animation-delay: 450ms;
}
</style>
