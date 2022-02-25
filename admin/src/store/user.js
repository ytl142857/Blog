import { reqUserLogin } from "@/api"
import { setToken, getToken, deleteToken } from "@/utils/auth"


const state = {
  token: getToken() || "",
  userName: ""
}

const mutations = {
  USERLOGIN(state, data) {
    state.token = data.token
    state.userName = data.userName
  },
  USERLOGOUT(state) {
    state.token = ""
  }
}

const actions = {
  async userLogin({commit}, data) {
    try {
      const res = await reqUserLogin(data)
      commit("USERLOGIN", res)
      setToken(res.token)
      
    } catch (error) {
      return Promise.reject(error)
    }
    
  },
  async userLogOut({commit}) {
    try {
      deleteToken()
      commit("USERLOGOUT")
    } catch (error) {
      return Promise.reject(error)
    }
  }

}

const getters = {

}

export default {
  state,
  mutations,
  actions,
  getters
}