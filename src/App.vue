<template>
  <body class="scroll-smooth">
    <div id="app">
      <div class="container">
        <Navbar />
      </div>

      <router-view />
    </div>
  </body>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar
  },
  setup() {
    return {};
  }
};
</script>

<style></style>
