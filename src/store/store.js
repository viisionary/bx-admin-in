import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

const state = {
  insurance: []
}

const mutations = {
  getInsurance (state, data) {
    state.insurance = data
  }
}
const actions = {
  async getInsurance (context) {
    axios.get('api/admin/allInsurance').then((res) => {
      if (res.status === 200) {
        context.commit('getInsurance', res.data.data)
        console.log(res)
      }
    })
  }
}
const getters = {
  insurance: state => state.insurance
}

export default new Vuex.Store({
  state, mutations, actions, getters
})
