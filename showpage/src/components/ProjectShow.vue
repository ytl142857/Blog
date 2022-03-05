<template>
  <v-hover v-slot="{ hover }">
    <v-card class="card-border" height="100%" width="100%" :color="hover ? 'grey lighten-3' : 'white'">
      <v-card-title class="myPrimary--text font-weight-medium" >{{
        projectContent.title
      }}</v-card-title>
      <v-card-text>
        <div>
          {{ projectContent.introduction }}
          <br />
          <div v-if="projectContent.link">
            项目地址：
            <a target="_blank" :href="projectContent.link">{{ projectContent.link }}</a>
          </div>
        </div>
        <v-chip
          class="mr-2 mt-2 mb-1"
          v-for="(tag, index) in projectContent.tags"
          :key="index"
          >{{ tag }}</v-chip
        >
      </v-card-text>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  props: {
    projectContent: Object,
  },
};
</script>

<style lang="scss" scoped>
.card-border {
  border: 1px solid black;
}
</style>