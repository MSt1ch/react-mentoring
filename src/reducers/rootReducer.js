import { combineReducers } from 'redux';
import searchFilmsData from './searchFilmsData';
import inputSearch from './inputSearch';
import searchFilmDescription from './searchFilmDescription';
import sort from './sort';

const rootReducer = combineReducers({
    content: searchFilmsData,
    search: inputSearch,
    sort,
    filmDescription: searchFilmDescription
});

export default rootReducer;
