export default function({ query, store }) {
  if (query.page) store.dispatch('set_currentPage', query.page - 1)
}
