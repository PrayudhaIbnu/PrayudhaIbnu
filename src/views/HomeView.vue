<template>
  <div class="container scroll-smooth overflow-auto">
    <div class="fixed z-10 left-4 mt-5">
      <ul
        class="menu menu-horizontal bg-base-200 rounded-xl fixed left-1/2 bottom-4 transform -translate-x-1/2 z-50 lg:static lg:left-auto lg:bottom-auto lg:transform-none lg:menu-vertical">
        <li>
          <a href="#hero" class="tooltip" data-tip="Hero">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 24 24">
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                color="currentColor">
                <path
                  d="M2 12c0-4.243 0-6.364 1.464-7.682C4.93 3 7.286 3 12 3s7.071 0 8.535 1.318S22 7.758 22 12s0 6.364-1.465 7.682C19.072 21 16.714 21 12 21s-7.071 0-8.536-1.318S2 16.242 2 12" />
                <path
                  d="M8.4 8h-.8c-.754 0-1.131 0-1.366.234C6 8.47 6 8.846 6 9.6v.8c0 .754 0 1.131.234 1.366C6.47 12 6.846 12 7.6 12h.8c.754 0 1.131 0 1.366-.234C10 11.53 10 11.154 10 10.4v-.8c0-.754 0-1.131-.234-1.366C9.53 8 9.154 8 8.4 8M6 16h4m4-8h4m-4 4h4m-4 4h4" />
              </g>
            </svg>
          </a>
        </li>
        <li>
          <a href="#portfolio" class="tooltip" data-tip="Portfolio">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 32 32">
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M29 17v11H3V17M2 8h28v8s-6 4-14 4s-14-4-14-4zm14 14v-4m4-10s0-4-4-4s-4 4-4 4" />
            </svg>
          </a>
        </li>
        <li>
          <a href="#contact" class="tooltip" data-tip="Contact">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M14.192 11.192h6.616V6.577h-6.616zm3.308-1.134l-2.461-1.712v-.884L17.5 9.173l2.462-1.711v.884zM2.616 19.616q-.691 0-1.153-.463T1 18V6q0-.69.463-1.153t1.152-.463h18.77q.69 0 1.153.463T23 6v12q0 .69-.462 1.153t-1.153.463zm12.169-1h6.6q.23 0 .423-.193Q22 18.231 22 18V6q0-.23-.192-.423q-.193-.192-.424-.192H2.616q-.231 0-.424.192T2 6v12q0 .23.192.423t.423.193h.6q1.05-1.356 2.554-2.178T9 15.616t3.23.822t2.555 2.178M9 14.23q1.039 0 1.77-.731t.73-1.77t-.73-1.768T9 9.23t-1.77.73t-.73 1.77t.73 1.769t1.77.73m-4.45 4.386h8.9q-.87-.95-2.022-1.475q-1.153-.525-2.428-.525t-2.425.525t-2.025 1.475M9 13.23q-.617 0-1.059-.441q-.441-.442-.441-1.06t.441-1.058T9 10.231t1.059.441t.441 1.059t-.441 1.059q-.442.44-1.059.44M12 12" />
            </svg>
          </a>
        </li>
      </ul>
    </div>
    <div class="mt-5">
      <Hero id="hero" />
      <!-- portfolio -->
      <section
        id="portfolio"
        class="flex flex-col items-center justify-center min-h-screen p-8 bg-base-100 dark:bg-base-300 rounded-3xl shadow-xl gap-8 transition-colors duration-500 ease-in-out">
        <h1
          class="text-4xl md:text-5xl font-extrabold text-neutral dark:text-neutral-content tracking-tight">
          Port<span class="text-error">fo</span>lio
        </h1>
        <p
          class="text-sm md:text-xl text-neutral-content/70 dark:text-neutral-content/80 mb-6 max-w-xl text-center">
          Kumpulan proyek yang menggambarkan minat saya dalam membangun web yang
          modern dan tampil bersih.
        </p>

        <section class="w-full max-w-6xl mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
            <transition-group name="fade-slide" tag="div" class="contents">
              <Portfolio
                v-for="(project, index) in projects"
                :key="project.title + index"
                :project="project" />
            </transition-group>
          </div>
        </section>
      </section>
      <!-- FAQ -->
      <!-- <section
        id="faq"
        class="py-16 px-6 sm:px-12 md:px-24 lg:px-32 text-base-content transition-colors duration-500 ease-in-out rounded-3xl shadow-xl mt-12">
        <h2
          class="text-4xl md:text-5xl font-extrabold text-center mb-8 text-neutral dark:text-neutral-content">
          Pertanyaan Umum (FAQ)
        </h2>

        <div class="space-y-4 max-w-4xl mx-auto">
          <div class="collapse bg-base-100 border border-base-300 rounded-xl">
            <input type="checkbox" class="peer" />
            <div
              class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content font-semibold text-lg">
              Bagaimana cara menghubungi Anda?
            </div>
            <div
              class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
              Anda dapat menggunakan form "Hubungi Saya" di bawah, atau kirim
              email langsung melalui alamat email yang tersedia.
            </div>
          </div>

          <div class="collapse bg-base-100 border border-base-300 rounded-xl">
            <input type="checkbox" class="peer" />
            <div
              class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content font-semibold text-lg">
              Apakah saya bisa melihat source code project Anda?
            </div>
            <div
              class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
              Sebagian besar proyek bersifat private, namun saya bisa mendemokan
              secara langsung atau menunjukkan cuplikan kodenya jika diperlukan.
            </div>
          </div>

          <div class="collapse bg-base-100 border border-base-300 rounded-xl">
            <input type="checkbox" class="peer" />
            <div
              class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content font-semibold text-lg">
              Apakah Anda menerima freelance atau kerja remote?
            </div>
            <div
              class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
              Ya! Saya terbuka untuk proyek freelance, kolaborasi, atau kerja
              remote. Silakan hubungi saya untuk diskusi lebih lanjut.
            </div>
          </div>
        </div>
      </section> -->
    </div>
    <!-- <div class="flex">
      <nav class="fixed top-8 left-32 bg-base-100/80 dark:bg-base-200/80 backdrop-blur rounded-xl shadow-md p-4 flex flex-col gap-4 z-50">
        <a
          href="#hero"
          class="text-neutral dark:text-neutral-content font-medium px-3 py-2 rounded-lg hover:bg-primary/10 hover:text-primary transition-colors duration-200"
        >
          Home
        </a>
        <a
          href="#portfolio"
          class="text-neutral dark:text-neutral-content font-medium px-3 py-2 rounded-lg hover:bg-primary/10 hover:text-primary transition-colors duration-200"
        >
          Portfolio
        </a>
      </nav>
    </div> -->
  </div>
  <Footer id="contact" />
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import Portfolio from "@/components/Portfolio.vue";
import Footer from "@/components/Footer.vue";

// image
// import expenseTracker from "@/img/expense-tracker.png";
// import displayInformasi from "@/img/display-informasi.png";
// import yukNgaji from "@/img/yukngaji.png";
// import oneMart from "@/img/onemart.png";

const projects = [
  {
    title: "Expense Tracker",
    description:
      "Aplikasi untuk memantau pengeluaran harian maupun bulanan dengan visualisasi yang informatif.",
    image: "/img/expense-tracker.png",
    tech: ["Laravel", "VueJS", "E chart", "Tailwind - Flowbite"]
  },
  {
    title: "Display Informasi (DISFO)",
    description:
      "Aplikasi informasi dinamis untuk kantor desa, menampilkan gambar, video, dan kegiatan desa.",
    image: "/img/display-informasi.png",
    tech: ["Laravel", "Bootstrap"]
  },
  {
    title: "YukNgaji",
    description:
      "Aplikasi YukNgaji merupakan aplikasi berbasis web yang memudahkan kita untuk membaca Al-Qur'an. Terdapat beberapa fitur seperti E-Quran, ChatBot, dan Jadwal Sholat untuk mempermudah pembelajaran agama Islam. ",
    image: "/img/yukngaji.png",
    tech: ["Laravel", "Bootstrap", "API from e-quran"]
  },
  {
    title: "OneMart Cashier App",
    description:
      "Aplikasi kasir berbasis web ini dibuat untuk memudahkan proses transaksi, pengolahan data produk, dan menjaga keamananscript Proyek ini memakan waktu 5 bulan dan menggunakan framework Laravel. Aplikasi ini digunakan oleh TOSERBA sekolah yang dikelola oleh BLUD SMK Negeri 1 Kota Bekasi. ",
    image: "/img/onemart.png",
    tech: ["Laravel", "Bootstrap", "NodeJS", "MySQL"]
  }
];
</script>

<style lang="scss" scoped></style>
