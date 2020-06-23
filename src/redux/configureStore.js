import {createStore, applyMiddleware} from 'redux';
import {rootReducer} from './rootReducer'
import thunk from 'redux-thunk'

export let store;
export function configureStore(initialState) {
  const reduxStore = createStore(rootReducer, initialState, applyMiddleware(thunk));
  store = reduxStore;
  return reduxStore;
}