<template>
  <v-app-bar app flat color="white">
    <v-container class="py-0 fill-height my-nav">

      <v-app-bar-title
        ><v-btn
          @click="toHome()"
          text
          x-large
          class="white rounded-1 font-weight-bold"
          >文章管理系统</v-btn
        ></v-app-bar-title
      >

      <v-spacer></v-spacer>
      <v-btn v-if="!isLogin" @click="toLogin" class="rounded-0" outlined
        >登录/注册</v-btn
      >

      <v-btn v-else @click="logOut" outlined class="rounded-0"
        >已登录，注销</v-btn
      >
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    toHome() {
      this.$router.push({ name: "ArticleList" });
    },
    toLogin() {
      this.$router.push({ name: "Login" });
    },
    logOut() {
      this.$store.dispatch("userLogOut");
    },
  },
  computed: {
    userInfo() {
      return this.$store.state.user;
    },
    isLogin() {
      return this.userInfo.token !== "";
    },
  },
};
</script>

<style lang="scss" scoped>
.my-nav {
  border-bottom: 1px solid #000000;
}
</style>
