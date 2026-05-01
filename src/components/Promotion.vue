<template>
  <section
    id="promotion"
    class="py-20 bg-gradient-to-tr from-cyan-600 via-cyan-600 to-green-300 text-white relative overflow-hidden">
    <div class="relative max-w-6xl mx-auto px-6 text-center">
      <!-- Badge -->
      <span
        class="inline-block mb-4 px-4 py-1.5 text-sm font-semibold tracking-wider uppercase rounded-full bg-white/20">
        Website Package
      </span>

      <!-- Heading -->
      <h2 class="text-4xl md:text-5xl font-extrabold tracking-tight">
        <span class="text-cyan-600 bg-white rounded-xl px-3">Professional</span>
        <span
          class="relative inline-block before:rounded-xl before:absolute before:-inset-1 before:block before:-skew-y-2 before:bg-white my-3 mx-3">
          <span class="relative text-green-600 px-3 py-3">Website</span>
        </span>
        <span class="text-cyan-600 bg-white rounded-xl px-3">Package</span>
      </h2>

      <p class="mt-6 text-lg text-white/90 max-w-2xl mx-auto">
        Modern, fast company profile website solutions ready to boost your
        business credibility. Perfect for SMEs and service businesses.
      </p>

      <!-- Pricing -->
      <div class="mt-12 grid md:grid-cols-3 gap-8 text-left">
        <PackageMiniCard />
        <PackageStarterCard />
        <PackageProfesionalCard />
      </div>

      <!-- CTA -->
      <div class="mt-16">
        <a
          href="#contact"
          class="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-slate-900 text-white font-bold shadow-xl hover:bg-slate-800 hover:-translate-y-1 transition-all duration-300">
          Free Consultation Now
          <span class="text-lg">→</span>
        </a>

        <p class="mt-4 text-sm text-white/80">
          *Price does not include hosting & domain
        </p>
      </div>
    </div>
  </section>
</template>
<script setup>
import PackageMiniCard from "@/components/ui/promotion/PackageMiniCard.vue";
import PackageStarterCard from "@/components/ui/promotion/PackageStarterCard.vue";
import PackageProfesionalCard from "@/components/ui/promotion/PackageProfesionalCard.vue";
</script>
