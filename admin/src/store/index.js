import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import article from './article'
import user from './user'

export default new Vuex.Store({
  modules: {
    article,
    user
  }
})
