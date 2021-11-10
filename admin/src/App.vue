<template>
  <v-app>
    <v-app-bar app color="white" flat>
      <Navbar />
    </v-app-bar>

    <v-main app class="grey lighten-3">
      <router-view/>
    </v-main>
    
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar.vue"

export default {
  components: {
    Navbar
  },
  methods: {
  }
}
</script>

<style lang="less">

</style>
