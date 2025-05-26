<template>
    <div class="card w-full max-w-xs bg-base-100 shadow-xl rounded-xl overflow-hidden hover:shadow-2xl transition-shadow">
        <figure>
            <img :src="image" alt="Project Image" class="w-full h-44 object-cover bg-base-200" />
        </figure>
        <div class="card-body p-5">
            <h2 class="card-title text-lg font-semibold text-base-content mb-2">{{ title }}</h2>
            <p class="text-base text-base-content/70">{{ description }}</p>
        </div>
    </div>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});
</script>
