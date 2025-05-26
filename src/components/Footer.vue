<template>
  <footer class="mt-20  pt-20 bg-base-200" id="contact">
    <div class="container">
      <div class="flex flex-wrap justify-center gap-10 md:gap-40">
        <!-- <aside class="m-4 text-base-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8055.419694766862!2d106.95805929461714!3d-6.244595037985843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698c575339dbe1%3A0x68160489c78521c9!2sJakasampurna%2C%20Kec.%20Bekasi%20Bar.%2C%20Kota%20Bks%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1719923055281!5m2!1sid!2sid"
            class="w-80 h-80 rounded-md"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="o-referrer-when-downgrade"></iframe>
          <br />
          <div class="m-4">
            <h3 class="text-2xl font-bold">Alamat</h3>
            <p class="opacity-50 text-sm">
              Jl. Patriot No.46, Jakasampurna, Bekasi Barat
            </p>
            <p class="opacity-50 text-sm">Kota Bekasi</p>
          </div>
        </aside> -->
        <div class="m-4 px-9">
          <h3 class="mb-3 text-md font-semibold text-accent">
            Kategori Tulisan
          </h3>
          <ul class="text-base-100">
            <li>
              <a
                href="#"
                class="mb-2 inline-block text-sm text-base-content opacity-50 hover:text-white"
                >Programming</a
              >
            </li>
            <li>
              <a
                href="#"
                class="mb-2 inline-block text-sm text-base-content opacity-50 hover:text-white"
                >Teknologi</a
              >
            </li>
            <li>
              <a
                href="#"
                class="mb-2 inline-block text-sm text-base-content opacity-50 hover:text-white"
                >Gaya Hidup</a
              >
            </li>
          </ul>
        </div>
        <div class="m-4 px-9">
          <h3 class="mb-3 text-md font-semibold text-accent">Tautan</h3>
          <ul class="text-base-100">
            <li>
              <a
                href="#home"
                class="mb-2 inline-block text-sm text-base-content opacity-50 hover:text-white"
                >Beranda</a
              >
            </li>
            <li>
              <a
                href="#about"
                class="mb-2 inline-block text-sm text-base-content opacity-50 hover:text-white"
                >Tentang Saya</a
              >
            </li>
            <li>
              <a
                href="#portfolio"
                class="mb-2 inline-block text-sm text-base-content opacity-50 hover:text-white"
                >Portfolio</a
              >
            </li>
            <li>
              <a
                href="#contact"
                class="mb-2 inline-block text-sm text-base-content opacity-50 hover:text-white"
                >Kontak</a
              >
            </li>
          </ul>
        </div>
        <div class="m-4 px-9 w-full md:w-96">
          <ContactForm />
        </div>
      </div>
      <br />
    </div>
    <div class="w-full border-t border-base-300 bg-gradient-to-r from-base-200 via-base-300 to-base-200 pt-8 pb-8">
      <div class="flex flex-col items-center justify-center gap-3">
      <!-- <div class="flex items-center gap-2">
        <span class="text-xl text-accent">
        <svg xmlns="http://www.w3.org/2000/svg" class="inline-block w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
        </svg>
        </span>
        <span class="font-bold text-base-content text-lg tracking-wide">Ibnu Prayudha</span>
      </div> -->
      <p class="text-center text-xs text-base-content opacity-70">
        Dibuat dengan
        <a
        href="https://tailwindcss.com"
        target="_blank"
        rel="noopener"
        class="font-bold text-accent hover:underline transition"
        >Tailwind</a
        >
        &
        <a
        href="https://daisyui.com"
        target="_blank"
        rel="noopener"
        class="font-bold text-accent hover:underline transition"
        >DaisyUI</a
        >
        menggunakan <span class="font-semibold">Vue.js</span>
      </p>
      <!-- <div class="flex gap-4 mt-2">
        <a href="https://instagram.com/_prayudhaibnu" target="_blank" rel="noopener" class="btn btn-circle btn-sm  text-white hover:bg-accent-focus transition">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
        </svg>
        </a>
        <a href="mailto:prayudhaibnu@gmail.com" class="btn btn-circle btn-sm  text-white hover:bg-accent-focus transition">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        </a>
        <a href="https://github.com/prayudhaibnu" target="_blank" rel="noopener" class="btn btn-circle btn-sm  text-white hover:bg-accent-focus transition">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.185 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.338-2.221-.253-4.555-1.112-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.396.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.849-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .267.18.578.688.48C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/>
        </svg>
        </a>
      </div> -->
      <span class="text-xs text-base-content opacity-60">© {{ new Date().getFullYear() }} Ibnu Prayudha. All rights reserved.</span>
      </div>
    </div>
  </footer>
</template>

<script>
import ContactForm from "@/components/ContactForm.vue";

export default {
  name: "Footer",
  components: {
    ContactForm
  }
};
</script>

<style scoped>
footer {
  box-sizing: border-box;
}
</style>
