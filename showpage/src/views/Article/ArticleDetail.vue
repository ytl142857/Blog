<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8">
        <v-card class="article-card pa-4" outlined>
          <v-container>
            <v-row>
              <v-card-title
                class="font-weight-bold text-h3 brown--text text--darken-3 my-4"
                >{{ article.title }}</v-card-title
              ></v-row
            >
            <v-row class="ml-2 mb-4">
              <v-chip color="brown" class="mr-2 font-weight-bold" text-color="white"
                >分类:
                {{ article.classfication === "life" ? "生活" : "技术" }}</v-chip
              >
              <v-chip color="brown" text-color="white" class="font-weight-bold"
                >创建时间：{{ article.createTime }}</v-chip
              >
            </v-row>

            <v-row><v-divider></v-divider></v-row>

            <v-row>
              <mavon-editor
                ref="md"
                class="editor mt-4"
                v-model="article.content"
                :boxShadow="false"
                :toolbarsFlag="editorConfig.toolbarsFlag"
                :subfield="editorConfig.subfield"
                :defaultOpen="editorConfig.defaultOpen"
                :previewBackground="editorConfig.previewBackground"
                :codeStyle="editorConfig.codeStyle"
              ></mavon-editor
            ></v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { reqArticle } from "@/api";
import moment from "moment";

export default {
  data() {
    return {
      article: {},
      editorConfig: {
        toolbarsFlag: false,
        subfield: false,
        defaultOpen: "preview",
        previewBackground: "#ffffff",
        codeStyle: "'atom-one-dark'",
      },
    };
  },
  async mounted() {
    try {
      const res = await reqArticle({ articleId: this.$route.params.articleId });
      this.article = res.article;
      this.article.createTime = moment(this.article.createTime).format(
          "YYYY-MM-DD HH:mm:ss")
      this.$refs.md.codeStyleChange("github", true);
    } catch (error) {
      return Promise.reject(new Error("获取文章失败"));
    }
  },
};
</script>

<style lang="scss" scoped>
.editor {
  border: 1px solid #ffffff;
}
</style>