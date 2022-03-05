<template>
  <v-container>
    <v-row justify="center">
      <v-col>
        <v-card class="article-card" outlined>
          <v-card-title>编辑文章</v-card-title>
          <v-divider></v-divider>

          <v-form v-model="validRules.valid">
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
                <v-col cols="6">
                  <v-text-field
                    v-model="article.title"
                    label="标题"
                    outlined
                    required
                    :rules="validRules.title"
                    clearable
                    :placeholder="article.title"
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-radio-group
                    v-model="article.classfication"
                    class="ml-4"
                    mandatory
                  >
                    <template v-slot:label>
                      <div><strong>分类</strong></div>
                    </template>
                    <v-radio label="技术" value="tech"></v-radio>
                    <v-radio label="生活" value="life"></v-radio>
                  </v-radio-group>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="6">
                  <v-combobox
                    v-model="article.tags"
                    label="tags"
                    outlined
                    multiple
                    small-chips
                    hide-selected
                  >
                  </v-combobox>
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <Editor
                    :mdContent="article.content"
                    @change="markdownChange"
                  />
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-btn
                    :disabled="!validRules.valid"
                    @click="submitArticle"
                    outlined
                    class="mr-4"
                    >修改文章</v-btn
                  >
                  <v-btn @click="deleteArticle" outlined color="error"
                    >删除文章</v-btn
                  >
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Editor from "@/components/Editor";

export default {
  components: {
    Editor,
  },
  data() {
    return {
      detailErrorMessage: "",
      detailErrorAlert: false,
      validRules: {
        valid: false,
        title: [(title) => !!title || "请输入标题"],
      },
      changedContent: ""
    };
  },
  methods: {
    async submitArticle() {
      try {
        this.article.content = this.changedContent
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
        await this.$store.dispatch("deleteArticle", {
          articleId: this.article._id,
        });
        this.$router.push({ name: "ArticleList" });
      } catch (error) {
        this.detailErrorMessage = "删除文章失败";
        this.detailErrorAlert = true;
      }
    },
    markdownChange(newContent) {
      this.changedContent = newContent;
    },
  },
  mounted() {
    this.$store.dispatch("getArticle", {
      articleId: this.$route.params.articleId,
    });
  },
  computed: {
    article() {
      return this.$store.state.article.article;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>