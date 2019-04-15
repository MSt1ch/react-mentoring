import {
    CHANGE_SORTBY_PARAMETER
} from '../constants/actionTypes';

export default function sort (
    state = {
        voteAverage: 'vote_average',
        releaseDate: 'release_date',
        activeSortBy: 'vote_average'
    },
    action
) {
    switch (action.type) {
        case CHANGE_SORTBY_PARAMETER:
            return {
                ...state,
                activeSortBy: action.payload
            };
        default:
            return state;
    }
}
