// import fetch from 'cross-fetch'

export const REQUEST_ARTICLES = 'REQUEST_ARTICLES'
function requestArticles() {
  return {
    type: REQUEST_ARTICLES,
  }
}

export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES'
function receiveArticles(json) {
  // debugger
  return {
    type: RECEIVE_ARTICLES,
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

// function fetchArticles() {
//   return dispatch => {
//     dispatch(requestArticles())
//     return fetch(`http://localhost:8080/articles`, {
//       method: 'GET',
//       headers: {
//         'Access-Control-Allow-Origin': '*',
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       }
//     })
//       .then(response => {
//         debugger
//         return response.json()
//       })
//       .then(json => dispatch(receiveArticles(json)))
//   }
// }

// window.fetch('https://api.furnas.ru/requests', {
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({email: contact})
//   });

// function shouldFetchArticles(state) {
// return true;
//     //   const posts = state.postsBySubreddit[subreddit]
// //   if (!posts) {
// //     return true
// //   } else if (posts.isFetching) {
// //     return false
// //   } else {
// //     return posts.didInvalidate
// //   }
// }

export function loadArticlesAction() {
  // Note that the function also receives getState()
  // which lets you choose what to dispatch next.

  // This is useful for avoiding a network request if
  // a cached value is already available.

  return (dispatch, getState) => {
    // if (shouldFetchArticles(getState())) {
    // Dispatch a thunk from thunk!
    return dispatch(fetchArticles())
    // } else {
    //   // Let the calling code know there's nothing to wait for.
    //   return Promise.resolve()
    // }
  }
}