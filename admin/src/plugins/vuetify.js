import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);


const vuetify = new Vuetify({
  theme: {
    themes: {
      light:{
        primary: "#000000"
      }
    }
  }
})


export default vuetify
