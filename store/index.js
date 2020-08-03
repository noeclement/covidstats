import countryCodesByContinent from './countryCodesByContinent.json'

export const state = () => ({
  activeContinents: ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'],
  defaultContinents: ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'],
  covidStats: [],
  currentPage: 0,
  selectedCountries: [],
  totalDeathsFilter: 0,
  deathsRatio: 0
})

export const mutations = {
  set_activeContinents(state, payload) {
    state.activeContinents = payload
  },
  set_covidStats(state, payload) {
    state.covidStats = payload
  },
  set_currentPage(state, payload) {
    state.currentPage = payload
  },
  set_deathsRatio(state, payload) {
    state.deathsRatio = payload
  },
  set_selectedCountries(state, payload) {
    state.selectedCountries = payload
  },
  set_totalDeathsFilter(state, payload) {
    state.totalDeathsFilter = payload
  },
  reset_filters(state) {
    state.selectedCountries = []
    state.totalDeathsFilter = 0
    state.activeContinents = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
    state.deathsRatio = 0
  }
}

export const actions = {
  async nuxtServerInit({ commit }, { $axios, error }) {
    await $axios
      .$get('https://api.covid19api.com/summary')
      .then(data => {
        commit('set_covidStats', data)
      })
      .catch(e => {
        error('Error while fetching data from the Covid 19 API.')
      })
  },
  set_activeContinents({ commit }, payload) {
    commit('set_activeContinents', payload)
  },
  set_currentPage({ commit }, payload) {
    commit('set_currentPage', payload)
  },
  set_deathsRatio({ commit }, payload) {
    commit('set_deathsRatio', payload)
  },
  set_selectedCountries({ commit }, payload) {
    commit('set_selectedCountries', payload)
  },
  set_totalDeathsFilter({ commit }, payload) {
    commit('set_totalDeathsFilter', payload)
  },
  reset_filters({ commit }) {
    commit('reset_filters')
  }
}

export const getters = {
  activeContinents: state => state.activeContinents,
  countries: state => state.covidStats.Countries,
  currentPage: state => state.currentPage,
  deathsRatio: state => state.deathsRatio,
  defaultContinents: state => state.defaultContinents,
  filteredCountries: state => {
    return state.covidStats.Countries.filter(country => {
      const continentsOk = state.activeContinents.some(continent =>
        countryCodesByContinent[continent].includes(country.CountryCode)
      )
      const selectedCountries =
        state.selectedCountries.length === 0 ||
        state.selectedCountries
          .map(e => e.CountryCode)
          .includes(country.CountryCode)
      const totalDeathsOk = country.TotalDeaths >= state.totalDeathsFilter
      const deathsRatioOk =
        (country.TotalDeaths / country.TotalConfirmed) * 100 >=
        state.deathsRatio
      return continentsOk && selectedCountries && totalDeathsOk && deathsRatioOk
    })
  },
  filteredCountriesCount: ({}, getters) => getters.filteredCountries.length,
  lastUpdated: state => state.covidStats.Date,
  pagesCount: ({}, getters) => Math.ceil(getters.filteredCountriesCount / 24),
  paginatedCountries: (state, getters) => {
    const page = state.currentPage
    return getters.filteredCountries.slice(page * 24, page * 24 + 24)
  },
  selectedCountries: state => state.selectedCountries,
  totalDeathsFilter: state => state.totalDeathsFilter
}
