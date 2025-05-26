<template>
    <section class="min-h-screen flex items-center justify-center bg-base-100 px-4">
        <div class="max-w-2xl w-full bg-base-200 rounded-2xl shadow-xl p-8 flex flex-col items-center gap-6">
            <div class="avatar">
                <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="https://i.pravatar.cc/150?img=3" alt="Profile" />
                </div>
            </div>
            <h2 class="text-3xl font-bold text-primary text-center">About Me</h2>
            <p class="text-base-content text-center text-lg">
                Hi! I'm <span class="font-semibold text-primary">Your Name</span>, a passionate web developer focused on creating modern, minimal, and user-friendly digital experiences. I love working with Vue.js, Tailwind CSS, and the latest web technologies to build beautiful and performant applications.
            </p>
            <div class="flex gap-4 mt-4">
                <button class="btn btn-primary btn-outline">Contact Me</button>
                <button class="btn btn-secondary btn-outline">Portfolio</button>
            </div>
        </div>
    </section>
</template>

<script setup>
// No script needed for this minimal section
</script></template>