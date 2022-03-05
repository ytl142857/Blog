<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8">
        <v-card class="article-card pa-4" outlined>
          <v-container>
            <v-row>
              <v-card-title
                class="font-weight-bold myPrimary--text my-4 decoration"
                >{{ article.title }}</v-card-title
              ></v-row
            >
            <v-row class="mb-4 ml-2">
              <v-chip color="myPrimary" class="mr-2" text-color="mySecond"
                >分类:
                {{ article.classfication === "life" ? "生活" : "技术" }}</v-chip
              >
              <v-chip color="myPrimary" text-color="mySecond"
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

.decoration::before {
  content: "";
  height: 100%;
  width: 5px;
  background-color: #54503C;
  margin-right: 10px;
}
</style>