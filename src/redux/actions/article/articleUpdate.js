import { postData } from "../postData"

function updateArticle(id, caption, status) {
  return dispatch => {
    return postData('http://localhost:8080/updateArticle', {
      id,
      caption,
      status
    })
  }
}

export function articleUpdate(id, caption, status) {
  return (dispatch, getState) => {
    return dispatch(updateArticle(id, caption, status))
  }
}