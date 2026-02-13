<template>
  <footer class="bg-gradient-to-l from-cyan-600 to-green-300">
    <div
      class="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
      <p class="text-sm text-gray-600">
        © {{ year }} Prayudha Ibnu. All rights reserved.
      </p>

      <div class="flex gap-6 text-sm text-gray-600">
        <a
          href="https://github.com/prayudhaibnu"
          target="_blank"
          class="hover:text-white"
          >GitHub</a
        >
        <!-- <a href="#" class="hover:text-cyan-600">LinkedIn</a> -->
        <a
          href="https://www.instagram.com/_prayudhaibnu/"
          target="_blank"
          class="hover:text-white"
          >Instagram</a
        >
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear();
</script>
