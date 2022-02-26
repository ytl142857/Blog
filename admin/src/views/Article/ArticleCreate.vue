<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="8">
        <v-card class="article-card" outlined>
          <v-card-title>编辑文章</v-card-title>
          <v-divider></v-divider>

          <v-form>
            <v-container class="pa-7">
              <v-row>
                <v-col>
                  <v-alert
                    v-model="createErrorAlert"
                    dense
                    dismissible
                    type="error"
                  >
                    创建文章失败
                  </v-alert>
                </v-col>
              </v-row>

              <v-row>
                <v-text-field
                  v-model="article.title"
                  label="标题"
                  outlined
                  clearable
                  :placeholder="article.title"
                ></v-text-field>
              </v-row>

              <v-row>
                <v-radio-group v-model="article.classfication" mandatory row>
                  <v-radio label="技术" value="tech"></v-radio>
                  <v-radio label="生活" value="life"></v-radio>
                </v-radio-group>
              </v-row>

              <v-row>
                <v-combobox
                  v-model="article.tags"
                  label="tags"
                  outlined
                  multiple
                  small-chips
                  hide-selected
                >
                </v-combobox>
              </v-row>

              <v-row>
                <v-textarea
                  outlined
                  label="文章内容"
                  v-model="article.content"
                ></v-textarea>
              </v-row>

              <v-row>
                <v-btn @click="createArticle" outlined class="mr-4"
                  >创建文章</v-btn
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
export default {
  data() {
    return {
      article: {
        title: "",
        tags: [],
        content: "",
        classfication: ""
      },
      createErrorAlert: false,
    };
  },
  methods: {
    async createArticle() {
      try {
        await this.$store.dispatch("createArticle", {
          article: {
            ...this.article
          },
        });
        this.$router.push({ name: "ArticleList" });
      } catch (error) {
        this.createErrorAlert = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>