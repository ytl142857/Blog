<template>
  <v-app-bar app color="brown darken-2" class="white--text" flat>
    <v-avatar>
      <img src="@/assets/logo.jpg" alt="" />
    </v-avatar>
    <v-btn @click="toHome" class="font-weight-bold white--text" text>栗子's Blog</v-btn>
    <v-spacer></v-spacer>

    <!-- 屏幕大显示 tabs -->
    <v-tabs
      v-if="!screenSize"
      v-model="currentRoute"
      right
      color="white"
    >
      <v-tab @click="toHome" class="font-weight-bold white--text">主页</v-tab>
      <v-tab @click="toArticleList" class="font-weight-bold white--text">文章列表</v-tab>
      <v-tab class="font-weight-bold white--text">关于</v-tab>
    </v-tabs>
    <!-- 屏幕小显示 menus -->
    <v-menu v-else offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="font-weight-bold white--text" text v-bind="attrs" v-on="on"><v-icon>mdi-table-of-contents</v-icon></v-btn>
      </template>
      <v-list color="brown darken-2">
        <v-list-item @click="toArticleList" class="white--text" link>文章列表</v-list-item>
        <v-list-item class="white--text" link>关于</v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      currentRoute: 1,
    };
  },
  computed: {
    screenSize() {
      return this.$vuetify.breakpoint.xs;
    },
  },
  methods: {
    toHome() {
      this.$router.push({ name: "Index"})
    },
    toArticleList() {
      this.$router.push({ name: "Article" })
    }
  }
};
</script>

<style lang="scss" scoped>
</style>