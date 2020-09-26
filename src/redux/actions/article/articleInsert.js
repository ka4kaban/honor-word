
function fetchArticle(id) {
  return dispatch => {
    // dispatch(requestArticle())
    return window.fetch('http://localhost:8080/addArticle/' + id, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      // .then(response => response.json())
      // .then(json => dispatch(receiveArticle(json)))
  }
}


export function articleInsert(id, caption) {
  return (dispatch, getState) => {
    return dispatch(fetchArticle(id))
  }
}