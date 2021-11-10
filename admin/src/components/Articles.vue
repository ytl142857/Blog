<template>
  <v-list color="transparent">
    <v-subheader>文章列表</v-subheader>
    <v-list-item-group>
      <v-list-item  v-for="article in articles" :key="article.articleId">
        <v-list-item-content @click="toDetail(article.articleId)">
          <v-list-item-title v-text="article.content"></v-list-item-title>
          <v-list-item-subtitle>创建时间: {{ article.createTime }}</v-list-item-subtitle>
          
        </v-list-item-content>
      
      </v-list-item>
      
      
    </v-list-item-group>
  </v-list>
</template>

<script>
export default {
  data() {
    return {
      articles: [
        {
          articleId: "id1",
          content: "content",
          createTime: "20211110",
          title: "title1"
        },
        {
          articleId: "id2",
          content: "content2",
          createTime: "20211110",
          title: "title2"
        },
      ]
    }
  },
  methods: {
    toDetail(articleId) {
      this.$router.push({ name: 'ArticleDetail', params: { id: articleId }})
    }
  }
}
</script>

<style>

</style>