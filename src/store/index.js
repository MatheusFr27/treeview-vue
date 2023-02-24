import { createStore } from 'vuex'

const treeview = {
  namespaced: true,
  state: () => ({
    node: {
      data: {},
      position: {
        y: null,
        x: null
      }
    }
  }),
  getters: {
    getNode(state) {
      return state.node
    }
  },
  mutations: {
    setNode(state, data) {
      state.node = data
    }
  },
  actions: {
    setNode({ commit }, data) {
      commit('setNode', data)
    }
  },
}

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    treeview: treeview
  }
})