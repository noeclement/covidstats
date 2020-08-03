export default function({ query, store }) {
  if (query.page) {
    store.dispatch(
      'set_currentPage',
      query.page > store.getters.pagesCount ? 0 : query.page - 1
    )
  }
}
