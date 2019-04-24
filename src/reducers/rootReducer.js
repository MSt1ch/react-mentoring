import { combineReducers } from 'redux';
import searchFilmsData from './searchFilmsData';
import searchFilmDescription from './searchFilmDescription';

const rootReducer = combineReducers({
    content: searchFilmsData,
    filmDescription: searchFilmDescription
});

export default rootReducer;
