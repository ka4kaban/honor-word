// /* eslint-disable import/no-mutable-exports */
// import thunkMiddleware from 'redux-thunk';
// import { createLogger } from 'redux-logger';
// import { applyMiddleware, compose, createStore } from 'redux';

// import Reducer from './reducers';
// import initialState from './initialState';
// import { IGlobalState } from '../types/redux';

// // const isShowLogs = () => {
// //   const isServer = process.env.IS_SERVER_SIDE;

// //   if (isServer) return false;
// //   return process.env.NODE_ENV === 'development';
// // };

// // const loggerMiddleware = createLogger({
// //   predicate: () => isShowLogs(),
// //   timestamp: false,
// //   collapsed: true
// // });

// function configureStore(state: IGlobalState) {
//   const enhancer = compose(applyMiddleware(thunkMiddleware, loggerMiddleware));
//   // @ts-ignore
//   return createStore(Reducer, state, enhancer);
// }

// export let store: { getState: () => IGlobalState, dispatch: any } = {
//   getState: () => initialState,
//   dispatch: () => {}
// };

// export default (state: IGlobalState) => {
//   const reduxStore = configureStore(state);
//   store = reduxStore;
//   return reduxStore;
// };
