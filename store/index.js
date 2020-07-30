export const state = () => ({
  covidStats: []
})

export const mutations = {
  set_covidStats(state, payload) {
    state.covidStats = payload
  }
}

export const actions = {
  nuxtServerInit({ commit }, { $axios }) {
    $axios.$get('https://api.covid19api.com/summary').then(data => {
      commit('set_covidStats', data)
    })
  }
}

export const getters = {
  pagesCount: state => Math.ceil(state.covidStats.Countries.length / 25),
  paginatedCountries: state => (page = 0) => {
    const countries = state.covidStats.Countries
    if (page === 0) return countries.slice(0, 25)
    else return countries.slice(page * 25, page * 25 + 25)
  }
}
