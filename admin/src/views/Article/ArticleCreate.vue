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
                <v-col cols="6">
                  <v-text-field
                    v-model="article.title"
                    label="标题"
                    outlined
                    required
                    :rules="validRules.title"
                    clearable
                    :placeholder="article.title"
                  ></v-text-field
                ></v-col>
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
                  </v-combobox
                ></v-col>
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
                  <v-btn @click="createArticle" :disabled="!validRules.valid" outlined class="mr-4"
                    >创建文章</v-btn
                  ></v-col
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
import Editor from "@/components/Editor";

export default {
  components: {
    Editor,
  },
  data() {
    return {
      article: {
        title: "",
        tags: [],
        content: "",
        classfication: "",
      },
      createErrorAlert: false,
      validRules: {
        valid: false,
        title: [(title) => !!title || "请输入标题"],
      },
    };
  },
  methods: {
    async createArticle() {
      try {
        await this.$store.dispatch("createArticle", {
          article: {
            ...this.article,
          },
        });
        this.$router.push({ name: "ArticleList" });
      } catch (error) {
        this.createErrorAlert = true;
      }
    },
    markdownChange(newContent) {
      this.article.content = newContent;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>