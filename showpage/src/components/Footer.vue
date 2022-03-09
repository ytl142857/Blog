<template>
  <v-footer absolute padless>
    <v-card class="text-center" width="100%" flat tile color="white">
      <v-divider></v-divider>
      <!-- <v-card-text>
        icon here
      </v-card-text> -->
      
      <v-card-text class="myPrimary--text font-weight-light">
        {{ new Date().getFullYear() }} Chestnutttt | 
        <a target="_blank" href="https://beian.miit.gov.cn/">渝ICP备2022002492号-1</a>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>