async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      // 'Accept': 'application/json',
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    // redirect: 'follow', // manual, *follow, error
    // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}


function addArticle(id, caption, status) {
  return dispatch => {
    return postData('http://localhost:8080/addArticle', {
      id,
      caption,
      status
    })
    // dispatch(requestArticle())
    // return window.fetch('http://localhost:8080/addArticle/' + id + '/caption/' + caption, {
    //   method: 'PUT',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   }
    // })
    // .then(response => response.json())
    // .then(json => dispatch(receiveArticle(json)))
  }
}

export function articleInsert(id, caption, status) {
  return (dispatch, getState) => {
    return dispatch(addArticle(id, caption, status))
  }
}