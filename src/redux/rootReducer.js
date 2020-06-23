import {combineReducers} from 'redux';
import articlesReducer from './reducers/articlesReducer';
// import {testReducer} from '../models/TestModel';

export const rootReducer = combineReducers({
    articles: articlesReducer
});
