export const REQUEST_PERSONS = 'REQUEST_PERSONS'
function requestPersons() {
  return {
    type: REQUEST_PERSONS,
  }
}

export const RECEIVE_PERSONS = 'RECEIVE_PERSONS'

function receivePersons(json) {
  return {
    type: 'SET_PERSONS',
    persons: json.data
  }
}

function fetchPersons(limit) {
  return dispatch => {
    dispatch(requestPersons())
    return window.fetch('http://localhost:8080/persons/' + limit, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(json => dispatch(receivePersons(json)))
  }
}


export function loadPersonsAction(limit = 20) {
  return (dispatch, getState) => {
    return dispatch(fetchPersons(limit))
  }
}