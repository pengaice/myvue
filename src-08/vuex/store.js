/**
 * Created by asus-z on 2018/11/12.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
 count:1
}
const mutations = {
  INCREMENT(state){
    state.count++
  },
  DECREMENT(state){
    state.count--
  },
}
const actions = {
  increment({commit}){
    commit('INCREMENT')
  },
  decrement({commit}){
    commit('DECREMENT')
  },
  increment({commit}){
    if(state.count%2 ===1){
      commit('INCREMENT')
    }
  },
  increment({commit}){
    setTimeout(()=>{
      commit('INCREMENT')
    },1000)
    
  }
}
const getters = {
  eventOrOdd(state){
    return state.count%2 ===1?'奇数':'偶数'
  }
}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
