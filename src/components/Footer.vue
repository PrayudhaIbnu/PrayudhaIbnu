<template>
  <footer class="bg-white border-t border-gay-200 border-t">
    <div
      class="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
      <p class="text-sm text-gray-500">
        © {{ year }} Ibnu Prayudha. All rights reserved.
      </p>

      <div class="flex gap-6 text-sm text-gray-600">
        <a
          href="https://github.com/prayudhaibnu"
          target="_blank"
          class="hover:text-cyan-600"
          >GitHub</a
        >
        <!-- <a href="#" class="hover:text-cyan-600">LinkedIn</a> -->
        <a
          href="https://www.instagram.com/_prayudhaibnu/"
          target="_blank"
          class="hover:text-cyan-600"
          >Instagram</a
        >
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear();
</script>
