<template>
  <v-app>
    <Navbar />
    <v-main style="margin-bottom: 100px;">
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue"

export default {
  name: "App",
  components: {
    Navbar,
    Footer
  },

  data: () => ({
    //
  }),
};
</script>
