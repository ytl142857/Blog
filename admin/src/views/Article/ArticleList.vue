<template>
  <v-container>
    <v-row>
      <v-col cols="2" class="mt-12">
        <v-sheet rounded="0" color="grey darken-1">
          <v-list color="transparent" flat>
            <v-list-item link>
              <v-list-item-content>
                <v-list-item-title class="white--text font-weight-bold"
                  >所有文章</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>

            <v-divider class="white"></v-divider>

            <v-subheader class="white--text">按分类查看</v-subheader>
            <v-list-item link>
              <v-list-item-content>
                <v-list-item-title class="white--text font-weight-bold"
                  >分类1</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
            <v-list-item link>
              <v-list-item-content>
                <v-list-item-title class="white--text font-weight-bold"
                  >分类2</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-sheet>
      </v-col>

      <v-col>
        <v-sheet min-height="70vh" rounded="lg">
          <v-list-item-title class="text-h6 pl-10 my-5">
            共{{ articleListCnt }}篇文章
            <v-btn depressed class="ml-4 primary rounded-0" @click="toArticleCreate">添加新文章</v-btn>
          </v-list-item-title>

          <v-list color="transparent" flat class="mx-6">
            <v-divider></v-divider>

            <div
              v-for="article in articleList"
              :key="article._id"
              @click="toDetail(article._id)"
            >
              <v-list-item link class="fontColor--text pb-5">
                <v-list-item-content>
                  <v-list-item-title class="text-h5 py-5">{{
                    article.title
                  }}</v-list-item-title>
                  <v-list-item-subtitle class="fontColor--text">
                    <v-chip
                      disabled
                      label
                      outlined
                      class="fontColor--text mr-3"
                      v-for="(tag, index) in article.tags"
                      :key="index"
                      >{{ tag }}</v-chip
                    >
                  </v-list-item-subtitle>
                  <v-list-item-subtitle class="fontColor--text pt-5">
                    分类：{{ article.classfication }} 创建日期:
                    {{ article.createTime }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-divider></v-divider>
            </div>
          </v-list>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  methods: {
    toDetail(articleId) {
      this.$router.push({ name: "Article", params: { articleId } });
    },
    toArticleCreate() {
      this.$router.push({name: "ArticleCreate"})
    }
  },
  mounted() {
    this.$store.dispatch("getArticleList");
  },
  computed: {
    ...mapState({
      articleList: (state) => state.article.articleList,
      articleListCnt: (state) => state.article.articleListCnt,
    }),
  },
};
</script>

<style lang="scss">
</style>