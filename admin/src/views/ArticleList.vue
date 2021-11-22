<template>
  <v-container>
    <v-row>
      <v-col cols="2">
        <v-sheet rounded="lg">
          <v-list color="transparent">
            <v-list-item link>
              <v-list-item-content>
                <v-list-item-title>
                  文章列表
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-divider class="my-2"></v-divider>

            <v-list-item link color="grey lighten-4">
              <v-list-item-content>
                <v-list-item-title>
                  Refresh
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-sheet>
      </v-col>
      <v-col cols="10">
        <v-sheet rounded="lg">
          <Articles />
        </v-sheet>
      </v-col>
      <div class="test">
        test
      </div>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'
import Articles from '@/components/Articles.vue'

export default {
  name: 'ArticleList',
  components: {
    Articles
  },
  data() {
    return {
      articles: null
    }
  },
  mounted() {
    axios
      .get("/api/articles")
      .then(msg => this.articles = msg.data)
  }
}
</script>

<style lang="scss" scoped>

</style>