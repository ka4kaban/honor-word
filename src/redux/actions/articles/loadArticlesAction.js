export const REQUEST_ARTICLES = 'REQUEST_ARTICLES'
function requestArticles() {
  return {
    type: REQUEST_ARTICLES,
  }
}

export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES'

function receiveArticles(json) {
  return {
    type: 'SET_ARTICLES',
    articles: json.data
  }
}

function fetchArticles(limit) {
  return dispatch => {
    dispatch(requestArticles())
    return window.fetch('http://localhost:8080/articles/' + limit, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(json => dispatch(receiveArticles(json)))
  }
}


export function loadArticlesAction(limit = 20) {
  return (dispatch, getState) => {
    return dispatch(fetchArticles(limit))
  }
}