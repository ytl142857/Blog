<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="6">
          <v-sheet rounded="lg">
            show article
          </v-sheet>
        </v-col>
        <v-col cols="6">
          <v-sheet rounded="lg">
            modify article
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      article: {
        articleId: "id1",
        content: "content",
        createTime: "20211110",
        title: "title1",
      },
    };
  },
};
</script>

<style>
</style>