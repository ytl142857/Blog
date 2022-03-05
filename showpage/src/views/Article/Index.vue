<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="6">
        <v-sheet flat class="mt-4">
          <v-btn-toggle v-model="classficationChoose" color="myPrimary" group>
            <v-btn value="all">所有文章</v-btn>
            <v-btn value="tech">技术</v-btn>
            <v-btn value="life">生活</v-btn>
          </v-btn-toggle>
          <v-card
            @click="toArticleDetail(article._id)"
            class="my-4"
            outlined
            v-for="article in showArticleList"
            :key="article._id"
          >
            <v-card-title class="myPrimary--text font-weight-bold">{{
              article.title
            }}</v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <div class="primary--text">
                TAGS:
                <v-chip
                  x-small
                  label
                  text-color="mySecond"
                  color="myPrimary"
                  class="mx-2 font-weight-bold"
                  v-for="(tag, index) in article.tags"
                  :key="index"
                >
                  {{ tag }}</v-chip
                >
                <div class="mt-2">
                  分类：{{
                    article.classfication === "life" ? "生活" : "技术"
                  }}
                  | 创建时间：{{ article.createTime }}
                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { reqArticleList } from "@/api";
import moment from "moment";

export default {
  components: {},
  data() {
    return {
      classficationChoose: "all",
      articleList: [],
      articleListCnt: 0,
      showArticleList: [],
    };
  },
  async mounted() {
    try {
      const res = await reqArticleList();
      this.articleList = res.articleList.map((article) => {
        // article.classfication =
        //   article.classfication === "life" ? "生活" : "技术";
        article.createTime = moment(article.createTime).format(
          "YYYY-MM-DD HH:mm:ss"
        );
        return article;
      });
      this.showArticleList = this.articleList;
      this.articleListCnt = res.articleListCnt;
    } catch (error) {
      return Promise.reject(new Error("获取文章列表失败"));
    }
  },
  methods: {
    toArticleDetail(articleId) {
      this.$router.push({ name: "ArticleDetail", params: { articleId } });
    },
    articleClassFilter(classfication) {
      this.showArticleList = this.articleList.filter((article) => {
        return article.classfication === classfication;
      });
    },
  },
  watch: {
    classficationChoose: {
      immediate: true,
      handler(newVal, oldVal) {
        if (newVal === "all") {
          this.showArticleList = this.articleList;
        } else {
          this.articleClassFilter(newVal);
        }
      },
    },
  },
};
</script>

<style lang="scss" scoped>
</style>