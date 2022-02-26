<template>
  <v-container>
    <v-row>
      <v-col cols="2" class="mt-12">
        <v-card light outlined>
          <v-list nav>
            <v-list-item-group v-model="selectedClass">
              <v-list-item link>
                <v-list-item-content rounded>
                  <v-list-item-title class="primary--text font-weight-bold"
                    >所有文章</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>

              <v-divider class="primary"></v-divider>

              <v-subheader class="primary--text">按分类查看</v-subheader>
              
              <v-list-item link>
                <v-list-item-content>
                  <v-list-item-title class="primary--text font-weight-bold"
                    >技术</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
              <v-list-item link>
                <v-list-item-content>
                  <v-list-item-title class="primary--text font-weight-bold"
                    >生活</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>

      <v-col>
        <v-card min-height="70vh" rounded="lg" class="py-4" outlined>
          <v-list-item-title class="text-h6 ml-10 my-4">
            共{{ articleListCnt }}篇文章
            <v-btn
              depressed
              class="ml-4 red white--text font-weight-bold rounded-0"
              @click="toArticleCreate"
              >
              <v-icon>mdi-plus</v-icon>
              添加新文章</v-btn
            >
          </v-list-item-title>

          <v-list color="transparent" flat class="mx-6">
            <v-divider class="primary"></v-divider>

            <div
              v-for="article in showArticleList"
              :key="article._id"
              @click="toDetail(article._id)"
            >
              <v-list-item link class="pb-3">
                <v-list-item-content>
                  <v-list-item-title class="text-h5 py-3 font-weight-bold">{{
                    article.title
                  }}</v-list-item-title>
                  <v-list-item-subtitle class="primary--text">
                    Tags:
                    <v-chip
                      x-small
                      label
                      text-color="white"
                      color="red"
                      class="ml-2 font-weight-bold"
                      v-for="(tag, index) in article.tags"
                      :key="index"
                    >
                      {{ tag }}</v-chip
                    >
                  </v-list-item-subtitle>
                  <v-list-item-subtitle class="primary--text pt-2">
                    分类：{{ article.classfication }}
                  </v-list-item-subtitle>
                  <v-list-item-subtitle class="primary--text pt-2">
                    创建日期:
                    {{ article.createTime }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-divider class="primary"></v-divider>
            </div>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      selectedClass: 0,
    };
  },
  methods: {
    toDetail(articleId) {
      this.$router.push({ name: "Article", params: { articleId } });
    },
    toArticleCreate() {
      this.$router.push({ name: "ArticleCreate" });
    },
    articleListFilter(classfication) {
      if (!classfication) {
        return this.formatArticleList;
      }
      return this.formatArticleList.filter((article) => {
        return article.classfication === classfication;
      });
    },
  },
  mounted() {
    this.$store.dispatch("getArticleList");
  },
  computed: {
    articleListCnt() {
      return this.showArticleList.length;
    },
    formatArticleList() {
      return this.$store.getters.formatArticleList;
    },
    showArticleList() {
      if(this.selectedClass == 1) {
        return this.articleListFilter("技术");
      } else if(this.selectedClass == 2) {
        return this.articleListFilter("生活");
      } else {
        return this.articleListFilter()
      }
    }
  },
  watch: {
  },
};
</script>

<style lang="scss">
</style>