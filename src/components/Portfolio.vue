<template>
  <div
    class="group card bg-base-100 shadow-lg hover:shadow-2xl rounded-2xl transition duration-300 ease-in-out overflow-hidden"
  >
    <figure class="overflow-hidden">
      <img
        :src="project.image"
        :alt="project.title"
        class="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
      />
    </figure>
    <div class="card-body text-center">
      <h2 class="card-title text-xl font-semibold">{{ project.title }}</h2>
      <div class="flex flex-wrap justify-center gap-2 mt-4">
      <p class="text-base-content/70">{{ project.description }}</p>
        <span
          v-for="tech in project.tech"
          :key="tech"
          class="badge badge-base-100 border-error text-error hover:bg-error hover:text-white hover:scale-105 px-3 py-1 mt-4 text-sm"
        >
          {{ tech }}
        </span>
      </div>
      <!-- <div class="card-actions justify-center mt-5">
        <button class="btn btn-soft rounded-full px-6 btn-sm">
          Selengkapnya
        </button>
      </div> -->
    </div>
  </div>
</template>
0
<script setup>
defineProps({
  project: Object
});
</script>
