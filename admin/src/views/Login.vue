<template>
  <v-container>
    <v-row>
      <v-col cols="4" offset="4">
        <v-sheet rounded="lg">
          <v-container pa="5">
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                v-model="userName"
                label="用户名"
                required
              ></v-text-field>

              <v-text-field
                v-model="password"
                label="密码"
                type="password"
                required
              ></v-text-field>

              <v-btn color="balck" class="mr-4" text @click="login">登录</v-btn>
            </v-form>
          </v-container>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    userName: "",
    password: ""
  }),

  methods: {
    login() {
      console.log(`${this.userName}, ${this.password}`)
    }
  }
}
</script>

<style>
</style>