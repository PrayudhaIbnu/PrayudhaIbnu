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

<template>
  <section
    id="contact"
    ref="sectionRef"
    class="relative overflow-hidden bg-gradient-to-tr from-cyan-200 via-gray-50 to-red-200 py-24">
    <div class="mx-auto max-w-7xl px-6">
      <div class="grid items-center gap-16 lg:grid-cols-2">
        <!-- LEFT CONTENT -->
        <div
          :class="[
            'transition-all duration-1000',
            isVisible
              ? 'translate-x-0 opacity-100'
              : '-translate-x-12 opacity-0',
          ]">
          <span
            class="mb-4 inline-block rounded-full bg-cyan-50 px-3 py-1 text-sm font-medium text-cyan-600">
            Contact Me
          </span>

          <h2
            class="text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
            Let’s build something
            <span class="text-cyan-600">extraordinary</span> together.
          </h2>

          <p class="mt-6 max-w-lg text-lg leading-relaxed text-gray-600">
            Whether you have a specific project in mind or just want to say hi,
            I'm always open to discussing new opportunities and creative ideas.
          </p>

          <!-- CONTACT INFO -->
          <div class="mt-10 space-y-6">
            <div
              v-for="(item, index) in contactInfo"
              :key="index"
              class="group flex items-start gap-4 transition-all duration-700"
              :style="{ transitionDelay: `${(index + 1) * 200}ms` }"
              :class="
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              ">
              <div
                class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-cyan-600 bg-gray-50 text-cyan-600 transition-colors duration-300 group-hover:bg-cyan-600 group-hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
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
                <p
                  class="text-sm font-medium uppercase tracking-wider text-gray-400">
                  {{ item.label }}
                </p>
                <p class="text-lg font-semibold text-gray-900">
                  {{ item.value }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- FORM -->
        <div
          :class="[
            'bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-cyan-100/50 border border-gray-100 transition-all duration-1000 transform delay-300',
            isVisible
              ? 'translate-x-0 opacity-100'
              : 'translate-x-12 opacity-0',
          ]">
          <form @submit.prevent="sendEmail" class="space-y-5">
            <div class="grid md:grid-cols-2 gap-5">
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  v-model="form.name"
                  type="text"
                  placeholder="John Doe"
                  required
                  class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 focus:outline-none" />
              </div>
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  v-model="form.email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 focus:outline-none" />
              </div>
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">
                Subject
              </label>
              <input
                v-model="form.subject"
                type="text"
                placeholder="Project Inquiry"
                required
                class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 focus:outline-none" />
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">
                Message
              </label>
              <textarea
                v-model="form.message"
                rows="4"
                required
                placeholder="Briefly describe your project..."
                class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 focus:outline-none resize-none"></textarea>
            </div>
            <!-- STATUS -->
            <div
              v-if="isSuccess || errorMessage"
              class="flex items-center gap-3 rounded-xl p-4 transition-all duration-300"
              :class="
                isSuccess
                  ? 'bg-green-50 text-green-700 border border-green-100'
                  : 'bg-red-50 text-red-700 border border-red-100'
              ">
              <div
                class="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full"
                :class="isSuccess ? 'bg-green-100' : 'bg-red-100'">
                <svg
                  v-if="isSuccess"
                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    d="M5 13l4 4L19 7" />
                </svg>
                <svg
                  v-else
                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <p class="text-sm font-semibold">
                {{ isSuccess ? "Message sent successfully!" : errorMessage }}
              </p>
            </div>
            <button
              type="submit"
              :disabled="isLoading"
              class="w-full py-4 bg-cyan-600 text-white font-bold rounded-xl hover:bg-cyan-700 hover:shadow-lg hover:shadow-cyan-200 transition-all duration-300 disabled:opacity-60">
              {{ isLoading ? "Sending..." : "Send Message" }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
