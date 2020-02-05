import axios from '~/plugins/axios'

export const state = () => ({
  products: []
})

export const mutations = {
  setData(state, items) {
    state.products = items
  },

  addData(state, product) {
    state.products.push(product)
  }
}

export const actions = {
  async nuxtServerInit({ commit }) {
    const res = await axios.get('pesanan')
    commit('setData', res.data)
  },

  async submitData({ commit }, product) {
    const res = await axios.post('pesanan', { product })
    commit('addData', res.data)
  }
}
