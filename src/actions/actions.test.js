import * as types from '../constants/actionTypes';
import * as actions from './actions';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import expect from 'expect';
import configureMockStore from 'redux-mock-store';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('should tests actions', () => {
    const text = 'name';
    it('should change search text', () => {
        expect(
            actions.setSearchText(text)
        ).toEqual({ type: types.CHANGE_SEARCH_DATA, text });
    });

    it('should change searchBy text', () => {
        expect(
            actions.setSearchByText(text)
        ).toEqual({ type: types.CHANGE_SEARCHBY_PARAMETER, textSearchBy: text });
    });

    it('should change sortBy text', () => {
        expect(
            actions.setSortByText(text)
        ).toEqual({ type: types.CHANGE_SORTBY_PARAMETER, textSortBy: text });
    });

    it('Should swith a boolean to let us know fetching started', () => {
        const expectAction = {
            type: types.REQUEST_FILM_DESCRIPTION
        };
        expect(actions.requestFilmDescription()).toEqual(expectAction);
    });
});


describe('async actions', () => {
    afterEach(() => {
        fetchMock.reset();
        fetchMock.restore();
    });

    const id = '338970';
    const mockResult = {};

    it('create RECEIVE_FILM_DESCRIPTION when fetching is done', () => {
        fetchMock.get(`http://react-cdp-api.herokuapp.com/movies/${id}`, mockResult);
        const expectedActions = [
            { type: types.REQUEST_FILM_DESCRIPTION },
            {
                type: types.RECEIVE_FILM_DESCRIPTION,
                similarFilm: mockResult
            }
        ];

        const store = mockStore({ payload: {} });

        return store.dispatch(actions.fetchFilmDescription(id)).then(data => {
            const dispatchedActions = store.getActions();
            expect(dispatchedActions).toEqual(expectedActions);
        });
    });

    const [film, activeSearchBy, activeSortBy] = ['tomb', 'title', 'vote_average'];
    const mockFilmsResult = {};

    it('create RECEIVE_FILMSDATA when fetching is done', () => {
        fetchMock.get(`https://reactjs-cdp.herokuapp.com/movies?sortBy=${activeSortBy}&sortOrder=desc&search=${film}&searchBy=${activeSearchBy}&limit=50`, mockFilmsResult);
        const expectedActions = [
            { type: types.REQUEST_FILMSDATA },
            {
                type: types.RECEIVE_FILMSDATA,
                similarFilms: mockFilmsResult
            }
        ];

        const store = mockStore({ payload: {} });

        return store.dispatch(actions.fetchFilmsData(film, activeSearchBy, activeSortBy)).then(data => {
            const dispatchedActions = store.getActions();
            expect(dispatchedActions).toEqual(expectedActions);
        });
    });
});
