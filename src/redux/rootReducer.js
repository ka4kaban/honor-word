import {combineReducers} from 'redux';
import articlesReducer from './reducers/articlesReducer';
import personsReducer from './reducers/personsReducer';

export const rootReducer = combineReducers({
    articles: articlesReducer,
    persons: personsReducer
});
