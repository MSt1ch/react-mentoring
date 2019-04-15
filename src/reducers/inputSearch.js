import {
    CHANGE_SEARCH_DATA,
    CHANGE_SEARCHBY_PARAMETER
} from '../constants/actionTypes';

export default function inputSearch (
    state = {
        value: '',
        title: 'title',
        genre: 'genre',
        activeSearchBy: 'title'
    },
    action
) {
    switch (action.type) {
        case CHANGE_SEARCH_DATA:
            return {
                ...state,
                value: action.payload
            };
        case CHANGE_SEARCHBY_PARAMETER:
            return {
                ...state,
                activeSearchBy: action.payload
            };
        default:
            return state;
    }
}
