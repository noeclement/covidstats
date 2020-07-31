export const state = () => ({
  covidStats: [],
  currentPage: 0
})

export const mutations = {
  set_covidStats(state, payload) {
    state.covidStats = payload
  },
  set_currentPage(state, payload) {
    state.currentPage = payload
  }
}

export const actions = {
  nuxtServerInit({ commit }, { $axios }) {
    $axios.$get('https://api.covid19api.com/summary').then(data => {
      commit('set_covidStats', data)
    })
  },
  set_currentPage({ commit }, payload) {
    commit('set_currentPage', payload)
  }
}

export const getters = {
  currentPage: state => state.currentPage,
  lastUpdated: state => state.covidStats.Date,
  pagesCount: state => Math.ceil(state.covidStats.Countries.length / 25),
  paginatedCountries: state => (page = 0) =>
    state.covidStats.Countries.slice(page * 25, page * 25 + 25)
}
