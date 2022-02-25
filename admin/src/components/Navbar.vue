<template>
  <v-app-bar
    class="font-weight-bold my-navbar"
    app
    color="fontColor--text"
    flat
  >
    <v-container class="py-0 fill-height">
      <v-app-bar-title
        ><v-btn
          @click="toHome()"
          depressed
          x-large
          class="primary rounded-0 pa-4 font-weight-bold"
          >文章管理系统</v-btn
        ></v-app-bar-title
      >

      <v-spacer></v-spacer>
      <v-btn v-if="!isLogin" @click="toLogin" class="rounded-0" outlined
        >登录/注册</v-btn
      >

      <v-btn v-else @click="logOut" outlined class="rounded-0"
        >{{ userInfo.userName }}已登录，注销</v-btn
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
      return this.userInfo.token !== ""
    },
  },
};
</script>

<style lang="scss" scoped>
.my-navbar {
  border-bottom: 1px solid black;
}
</style>
