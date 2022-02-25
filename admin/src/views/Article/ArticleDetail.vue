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
                    v-model="detailErrorAlert"
                    dense
                    dismissible
                    type="error"
                  >
                    {{ detailErrorMessage }}
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
                <v-btn @click="submitArticle" outlined class="mr-4"
                  >修改文章</v-btn
                >
                <v-btn @click="deleteArticle" outlined color="error"
                  >删除文章</v-btn
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
import { mapState } from "vuex";

export default {
  data() {
    return {
      detailErrorMessage: "",
      detailErrorAlert: false,
    };
  },
  methods: {
    async submitArticle() {
      try {
        const postArticle = { ...this.article };
        delete postArticle._id;
        await this.$store.dispatch("putArticle", {
          articleId: this.article._id,
          article: {
            ...postArticle,
          },
        });
        this.$router.push({ name: "ArticleList" });
      } catch (error) {
        this.detailErrorMessage = "修改文章失败";
        this.detailErrorAlert = true;
      }
    },
    async deleteArticle() {
      try {
        await this.$store.dispatch("deleteArticle", {articleId: this.article._id});
        this.$router.push({ name: "ArticleList" });
      } catch (error) {
        this.detailErrorMessage = "删除文章失败";
        this.detailErrorAlert = true;
      }
    },
  },
  mounted() {
    this.$store.dispatch("getArticle", {
      articleId: this.$route.params.articleId,
    });
  },
  computed: {
    ...mapState({
      article: (state) => state.article.article,
    }),
  },
};
</script>

<style lang="scss" scoped>
</style>