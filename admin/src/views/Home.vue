<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    {{ articles }}
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    HelloWorld
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
    console.log(this.articles)
  }
}
</script>
