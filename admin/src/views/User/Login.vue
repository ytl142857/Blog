<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="4">
        <v-card class="article-card" outlined>
          <v-card-title>管理员登录</v-card-title>
          <v-divider></v-divider>

          <v-form>
            <v-container class="pa-7">
              <v-row>
                <v-col>
                  <v-alert
                    v-model="loginErrorAlert"
                    dense
                    dismissible
                    type="error"
                  >
                    登录失败
                  </v-alert>
                </v-col>
              </v-row>

              <v-row>
                <v-text-field
                  v-model="user.username"
                  label="用户名"
                  outlined
                  clearable
                ></v-text-field>
              </v-row>

              <v-row>
                <v-text-field
                  v-model="user.password"
                  label="密码"
                  type="password"
                  outlined
                  clearable
                ></v-text-field>
              </v-row>

              <v-row>
                <v-btn @click="userLogin" color="primary" depressed class="mr-4"
                  >登录</v-btn
                >
              </v-row>
            </v-container>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { sha256 } from "js-sha256";

export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
      loginErrorAlert: false,
    };
  },
  methods: {
    async userLogin() {
      try {
        await this.$store.dispatch("userLogin", { user: { username: this.user.username, password: sha256(this.user.password) } });
        this.$router.push({ name: "ArticleList" });
      } catch (error) {
        this.loginErrorAlert = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>