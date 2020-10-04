import { postData } from "../postData"

function addArticle(id, caption, status) {
  return dispatch => {
    return postData('http://localhost:8080/addArticle', {
      id,
      caption,
      status
    })
  }
}

export function articleInsert(id, caption, status) {
  return (dispatch, getState) => {
    return dispatch(addArticle(id, caption, status))
  }
}