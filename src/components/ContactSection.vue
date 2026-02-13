<template>
  <section
    id="contact"
    ref="sectionRef"
    class="relative py-24 overflow-hidden bg-gradient-to-tl from-green-300 via-cyan-600 to-cyan-600 text-white">
    <!-- Soft Glow -->
    <!-- <div
      class="absolute -top-32 -left-32 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
    <div
      class="absolute -bottom-32 -right-32 w-96 h-96 bg-black/10 rounded-full blur-3xl"></div> -->

    <div class="relative max-w-7xl mx-auto px-6">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- LEFT SIDE -->
        <div
          :class="[
            'transition-all duration-1000',
            isVisible
              ? 'translate-x-0 opacity-100'
              : '-translate-x-12 opacity-0',
          ]">
          <span
            class="inline-block px-4 py-1.5 mb-4 text-sm font-semibold tracking-wider uppercase rounded-full bg-gray-900/20 backdrop-blur-md">
            Contact Me
          </span>

          <h2 class="text-4xl md:text-5xl font-extrabold leading-tight">
            Let’s Build
            <span
              class="relative inline-block before:rounded-xl before:absolute before:-inset-1 before:block before:-skew-y-2 before:bg-white mb-6">
              <span class="relative text-cyan-600 px-3 py-1">Something</span>
            </span>
            <span class="text-white/80"
              >Great
              <span
                class="relative inline-block before:rounded-xl before:absolute before:-inset-1 before:block before:-skew-y-2 before:bg-white mb-6">
                <span class="relative text-green-600 px-3 py-1">Together</span>
              </span>
            </span>
          </h2>

          <p class="mt-6 text-lg text-white/90 max-w-xl">
            Have a project in mind? Need a professional company profile website?
            Send your details and let’s discuss how we can make it happen.
          </p>

          <!-- CONTACT INFO -->
          <div class="mt-10 space-y-6">
            <div
              v-for="(item, index) in contactInfo"
              :key="index"
              class="flex items-start gap-4 transition-all duration-700"
              :style="{ transitionDelay: `${(index + 1) * 200}ms` }"
              :class="
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              ">
              <div
                class="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-900/20 backdrop-blur-md border border-white/30">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    :d="item.icon" />
                </svg>
              </div>

              <div>
                <p class="text-sm uppercase tracking-wider text-white/70">
                  {{ item.label }}
                </p>
                <p class="text-lg font-semibold text-white">
                  {{ item.value }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- FORM -->
        <div
          :class="[
            'backdrop-blur-xl bg-white/15 p-8 md:p-10 rounded-3xl shadow-2xl transition-all duration-1000 delay-300',
            isVisible
              ? 'translate-x-0 opacity-100'
              : 'translate-x-12 opacity-0',
          ]">
          <form @submit.prevent="sendEmail" class="space-y-5">
            <div class="grid md:grid-cols-2 gap-5">
              <div>
                <label class="block text-sm font-semibold mb-2">
                  Full Name
                </label>
                <input
                  v-model="form.name"
                  type="text"
                  required
                  placeholder="John Doe"
                  class="w-full px-4 py-3 rounded-xl bg-gray-900/20 border border-white/30 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40 transition-all" />
              </div>

              <div>
                <label class="block text-sm font-semibold mb-2"> Email </label>
                <input
                  v-model="form.email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  class="w-full px-4 py-3 rounded-xl bg-gray-900/20 border border-white/30 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40 transition-all" />
              </div>
            </div>

            <div>
              <label class="block text-sm font-semibold mb-2"> Subject </label>
              <input
                v-model="form.subject"
                type="text"
                required
                placeholder="Company Profile Website"
                class="w-full px-4 py-3 rounded-xl bg-gray-900/20 border border-white/30 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40 transition-all" />
            </div>

            <div>
              <label class="block text-sm font-semibold mb-2">
                Project Details
              </label>
              <textarea
                v-model="form.message"
                rows="4"
                required
                placeholder="Tell me about your business..."
                class="w-full px-4 py-3 rounded-xl bg-gray-900/20 border border-white/30 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40 transition-all resize-none"></textarea>
            </div>

            <!-- STATUS -->
            <div
              v-if="isSuccess || errorMessage"
              class="rounded-xl p-4 text-sm font-semibold backdrop-blur-md"
              :class="
                isSuccess
                  ? 'bg-green-400/20 border border-green-300/30'
                  : 'bg-red-400/20 border border-red-300/30'
              ">
              {{ isSuccess ? "Message sent successfully!" : errorMessage }}
            </div>

            <button
              type="submit"
              :disabled="isLoading"
              class="w-full py-4 rounded-xl bg-slate-900 text-white font-bold transition-all duration-300 hover:bg-black hover:-translate-y-1 hover:shadow-lg disabled:opacity-60">
              {{ isLoading ? "Sending..." : "Start Project Discussion →" }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import emailjs from "@emailjs/browser";

/* ================= ENV ================= */
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

/* ================= ANIMATION ================= */
const isVisible = ref(false);
const sectionRef = ref(null);
let observer;

const contactInfo = [
  {
    label: "Email me at",
    value: "prayudhaibnu@gmail.com",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    label: "Call or WhatsApp",
    value: "+62 857-7659-3191",
    icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
  },
  {
    label: "Location",
    value: "Bekasi, West Java, Indonesia",
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
  },
];

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true;
        observer.unobserve(entry.target);
      }
    },
    { threshold: 0.1 },
  );

  if (sectionRef.value) observer.observe(sectionRef.value);
});

onUnmounted(() => {
  observer?.disconnect();
});

/* ================= FORM STATE ================= */
const form = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const isLoading = ref(false);
const isSuccess = ref(false);
const errorMessage = ref("");

/* ================= SEND EMAIL ================= */
const sendEmail = async () => {
  isLoading.value = true;
  isSuccess.value = false;
  errorMessage.value = "";

  try {
    await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: form.value.name,
        from_email: form.value.email,
        subject: form.value.subject,
        message: form.value.message,
      },
      PUBLIC_KEY,
    );

    isSuccess.value = true;
    form.value = { name: "", email: "", subject: "", message: "" };
  } catch (error) {
    console.error(error);
    errorMessage.value = "Failed to send message. Please try again.";
  } finally {
    isLoading.value = false;
  }
};
</script>
