import countryCodesByContinent from './countryCodesByContinent.json'

export const state = () => ({
  activeContinents: ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'],
  covidStats: [],
  currentPage: 0,
  totalDeathsFilter: 0
})

export const mutations = {
  set_covidStats(state, payload) {
    state.covidStats = payload
  },
  set_currentPage(state, payload) {
    state.currentPage = payload
  },
  set_totalDeathsFilter(state, payload) {
    state.totalDeathsFilter = payload
  }
}

export const actions = {
  async nuxtServerInit({ commit, dispatch }, { $axios }) {
    await $axios.$get('https://api.covid19api.com/summary').then(data => {
      commit('set_covidStats', data)
    })
  },
  set_currentPage({ commit }, payload) {
    commit('set_currentPage', payload)
  },
  set_totalDeathsFilter({ commit }, payload) {
    commit('set_totalDeathsFilter', payload)
  }
}

export const getters = {
  currentPage: state => state.currentPage,
  countries: state => {
    return state.covidStats.Countries.filter(country => {
      const totalDeathsOk = country.TotalDeaths >= state.totalDeathsFilter
      const continentsOk = state.activeContinents.some(continent =>
        countryCodesByContinent[continent].includes(country.CountryCode)
      )
      return totalDeathsOk && continentsOk
    })
  },
  totalDeathsFilter: state => state.totalDeathsFilter,
  lastUpdated: state => state.covidStats.Date,
  pagesCount: ({}, getters) => Math.ceil(getters.countries.length / 25),
  paginatedCountries: (state, getters) => {
    const page = state.currentPage
    return getters.countries.slice(page * 25, page * 25 + 25)
  }
}
