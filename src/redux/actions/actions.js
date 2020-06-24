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

function fetchArticles() {
  return dispatch => {
    dispatch(requestArticles())
    return window.fetch('http://localhost:8080/articles', {
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


export function loadArticlesAction() {
  return (dispatch, getState) => {
    return dispatch(fetchArticles())
  }
}



export const REQUEST_ARTICLE = 'REQUEST_ARTICLE'
function requestArticle() {
  return {
    type: REQUEST_ARTICLE,
  }
}

export const RECEIVE_ARTICLE = 'RECEIVE_ARTICLE'

function receiveArticle(json) {
  return {
    type: 'SET_ARTICLE',
    article: json.data[0] //TODO update server
  }
}

function fetchArticle(id) {
  return dispatch => {
    dispatch(requestArticle())
    return window.fetch('http://localhost:8080/article/' + id, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(json => dispatch(receiveArticle(json)))
  }
}


export function loadArticleByIdAction(id) {
  return (dispatch, getState) => {
    return dispatch(fetchArticle(id))
  }
}