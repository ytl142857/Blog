<template>
  <v-footer absolute padless>
    <v-card class="text-center" width="100%" flat tile color="white">
      <v-divider></v-divider>

      <v-card-text class="myPrimary--text font-weight-light">
        {{ new Date().getFullYear() }} Chestnutttt |
        <a target="_blank" href="https://beian.miit.gov.cn/"
          >渝ICP备2022002492号-1</a
        >
        | <a
          target="_blank"
          href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=50011202503295"
          ><v-avatar size="16px"><img src="@/assets/gov.png" /></v-avatar> 渝公网安备 50011202503295号</a
        >
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>