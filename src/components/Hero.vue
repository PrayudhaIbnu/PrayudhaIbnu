<template>
  <section
    class="flex flex-col md:flex-row items-center justify-center min-h-[70vh] p-4 sm:p-6 md:p-8 bg-base-300 border border-base-200 mb-6 mt-4 rounded-3xl shadow-xl gap-8">
    <div class="w-full md:w-2/3 max-w-2xl">
      <!-- Text Section -->
      <transition name="fade-slide">
        <div v-if="showText" class="flex-1 m-4">
          <h1
            class="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2 text-neutral dark:text-neutral-content tracking-tight">
            {{ displayText }} <span class="text-info">{{ displayName }}</span>
          </h1>
          <div class="flex-1">
            <p
              class="text-base sm:text-lg md:text-xl text-base-content/70 mb-8 max-w-lg">
              Seorang <span class="text-info">Web Developer</span> yang fokus
              pada pengembangan <span class="text-info">Front-End</span>,
              menciptakan pengalaman modern dan minimalis.
            </p>
          </div>
        </div>
      </transition>
      <hr class="border-base-100 border-2 mb-8" />

      <!-- Button Section -->
      <transition name="fade-slide">
        <section v-if="showButtons" class="mb-8">
          <h2
            class="text-xl sm:text-2xl text-center font-extrabold mb-6 text-neutral/80 dark:text-neutral-content tracking-tight">
            Teram<span class="text-warning">pil den</span>gan...
          </h2>
          <div
            class="flex gap-2 sm:gap-4 flex-wrap justify-center items-center">
            <transition-group
              name="badge-fade"
              tag="div"
              class="flex gap-2 sm:gap-4 flex-wrap justify-center items-center">
              <span
                v-for="(badge, index) in skills"
                :key="badge"
                class="btn btn-soft btn-warning btn-xs sm:btn-sm text-xs sm:text-sm rounded-full hover:scale-110 px-4 py-2 shadow-md shadow-yellow-500/50"
                :style="{ transitionDelay: `${index * 100}ms` }">
                {{ badge }}
              </span>
              <span
                v-for="(badge, index) in frameworks"
                :key="badge"
                class="btn btn-soft btn-success btn-xs sm:btn-sm text-xs sm:text-sm rounded-full hover:scale-110 px-4 py-2 shadow-md shadow-green-700/50"
                :style="{ transitionDelay: `${index * 100}ms` }">
                {{ badge }}
              </span>
              <span
                v-for="(badge, index) in library"
                :key="badge"
                class="btn btn-soft btn-xs sm:btn-sm text-xs sm:text-sm rounded-full hover:scale-110 px-4 py-2 shadow-md shadow-gray-100/50"
                :style="{ transitionDelay: `${index * 100}ms` }">
                {{ badge }}
              </span>
              <span
                v-for="(badge, index) in softSkills"
                :key="badge"
                class="btn btn-soft btn-primary btn-xs sm:btn-sm text-xs sm:text-sm rounded-full hover:scale-110 px-4 py-2 shadow-md shadow-purple-400/50"
                :style="{ transitionDelay: `${index * 100}ms` }">
                {{ badge }}
              </span>
            </transition-group>
          </div>
        </section>
      </transition>
      <hr class="border-base-100 border-2 mb-8" />
      <transition name="fade-slide">
        <section
          v-if="showButtons"
          class="flex flex-col gap-3 sm:gap-4 mt-4 bg-base-100/70 rounded-2xl shadow-lg p-4 sm:p-6 border border-base-200 backdrop-blur-sm">
          <div class="flex flex-wrap justify-center gap-4">
            <div
              key="instagram"
              class="flex items-center group hover:bg-info/10 rounded-lg px-2 sm:px-3 py-2 transition-all duration-300">
              <a href="https://instagram.com/_prayudhaibnu">
                <button
                  class="btn btn-circle shadow-md hover:scale-125 hover:shadow-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24">
                    <g fill="none" stroke="currentColor" stroke-width="1.5">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8" />
                      <path
                        d="M3 16V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5Z" />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m17.5 6.51l.01-.011" />
                    </g>
                  </svg>
                </button>
              </a>
            </div>

            <div
              key="github"
              class="flex items-center group hover:bg-info/10 rounded-lg px-2 sm:px-3 py-2 transition-all duration-300">
              <a href="https://github.com/PrayudhaIbnu/">
                <button
                  class="btn btn-circle shadow-md hover:scale-125 hover:shadow-gray-700"
                  alt="Github">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24">
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      color="currentColor">
                      <path d="M10 20.568c-3.429 1.157-6.286 0-8-3.568" />
                      <path
                        d="M10 22v-3.242c0-.598.184-1.118.48-1.588c.204-.322.064-.78-.303-.88C7.134 15.452 5 14.107 5 9.645c0-1.16.38-2.25 1.048-3.2c.166-.236.25-.354.27-.46c.02-.108-.015-.247-.085-.527c-.283-1.136-.264-2.343.16-3.43c0 0 .877-.287 2.874.96c.456.285.684.428.885.46s.469-.035 1.005-.169A9.5 9.5 0 0 1 13.5 3a9.6 9.6 0 0 1 2.343.28c.536.134.805.2 1.006.169c.2-.032.428-.175.884-.46c1.997-1.247 2.874-.96 2.874-.96c.424 1.087.443 2.294.16 3.43c-.07.28-.104.42-.084.526s.103.225.269.461c.668.95 1.048 2.04 1.048 3.2c0 4.462-2.134 5.807-5.177 6.643c-.367.101-.507.559-.303.88c.296.47.48.99.48 1.589V22" />
                    </g>
                  </svg>
                </button>
              </a>
            </div>

            <div
              key="email"
              class="flex items-center group hover:bg-info/10 rounded-lg px-2 sm:px-3 py-2 transition-all duration-300">
              <a href="mailto:prayudhaibnu823@gmail.com">
                <button
                  class="btn btn-circle shadow-md hover:scale-125 hover:shadow-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24">
                    <g fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect width="18.5" height="17" x="2.682" y="3.5" rx="4" />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m2.729 7.59l7.205 4.13a3.96 3.96 0 0 0 3.975 0l7.225-4.13" />
                    </g>
                  </svg>
                </button>
              </a>
            </div>

            <div
              key="whatsapp"
              class="flex items-center group hover:bg-info/10 rounded-lg px-2 sm:px-3 py-2 transition-all duration-300">
              <a href="https://wa.me/6285776593191">
                <button
                  class="btn btn-circle shadow-md hover:scale-125 hover:shadow-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M16.6 14c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1s-.6.8-.8 1c-.1.2-.3.2-.5.1c-.7-.3-1.4-.7-2-1.2c-.5-.5-1-1.1-1.4-1.7c-.1-.2 0-.4.1-.5s.2-.3.4-.4c.1-.1.2-.3.2-.4c.1-.1.1-.3 0-.4S9.7 8.5 9.5 8c-.1-.7-.3-.7-.5-.7h-.5c-.2 0-.5.2-.6.3Q7 8.5 7 9.7c.1.9.4 1.8 1 2.6c1.1 1.6 2.5 2.9 4.2 3.7c.5.2.9.4 1.4.5c.5.2 1 .2 1.6.1c.7-.1 1.3-.6 1.7-1.2c.2-.4.2-.8.1-1.2zm2.5-9.1C15.2 1 8.9 1 5 4.9c-3.2 3.2-3.8 8.1-1.6 12L2 22l5.3-1.4c1.5.8 3.1 1.2 4.7 1.2c5.5 0 9.9-4.4 9.9-9.9c.1-2.6-1-5.1-2.8-7m-2.7 14c-1.3.8-2.8 1.3-4.4 1.3c-1.5 0-2.9-.4-4.2-1.1l-.3-.2l-3.1.8l.8-3l-.2-.3c-2.4-4-1.2-9 2.7-11.5S16.6 3.7 19 7.5c2.4 3.9 1.3 9-2.6 11.4" />
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </section>
      </transition>
    </div>
    <!-- Image Section (uncomment if needed)
    <transition name="fade-slide">
      <div
        v-if="showImage"
        class="flex-shrink-0 flex items-center justify-center mb-6 md:mb-0"
      >
        <img
          src="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
          alt="Profile"
          class="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 object-cover rounded-full border-4 border-info/20 shadow"
        />
      </div>
    </transition>
    -->
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const fullText = "Hi... Saya";
const name = "Ibnu Prayudha";
const displayText = ref("");
const displayName = ref("");
const typingSpeed = 100;

const showText = ref(false);
const showButtons = ref(false);
// const showImage = ref(false);

const skills = [
  "HTML5",
  "CSS3",
  "JS",
  "PHP",
  "Tailwind CSS",
  "Bootstrap",
  "Git"
];

const frameworks = ["VueJS", "Laravel", "CodeIgniter"];

const library = ["Tailwind CSS", "Bootstrap"];

const softSkills = [
  "Public Speaking",
  "Kerjasama Tim",
  "Pemecahan Masalah",
  "Mudah Beradaptasi",
  "Komunikasi"
];

function typeText(text, refVar, cb) {
  let i = 0;
  function type() {
    if (i < text.length) {
      refVar.value += text[i];
      i++;
      setTimeout(type, typingSpeed);
    } else if (cb) {
      cb();
    }
  }
  type();
}

onMounted(() => {
  setTimeout(() => {
    showText.value = true;
    typeText(fullText, displayText, () => {
      typeText(name, displayName);
    });
  }, 200);
  setTimeout(() => {
    showButtons.value = true;
  }, 700);
  //   setTimeout(() => {
  //     showImage.value = true;
  //   }, 1200);
});
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(40px) scale(0.98);
}
.fade-slide-enter-to,
.fade-slide-leave-from {
  opacity: 1;
  transform: translscript scale(1);
}
</style>
