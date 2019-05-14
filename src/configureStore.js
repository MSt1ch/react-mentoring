import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers/rootReducer';
import rootSaga from './rootSaga';

const loggerMiddleware = createLogger();

const sagaMiddleware = createSagaMiddleware();

export default function configureStore (preloaderState) {
    const store = createStore(
        rootReducer,
        preloaderState,
        applyMiddleware(sagaMiddleware, loggerMiddleware)
    );

    sagaMiddleware.run(rootSaga);
    store.runSaga = () => sagaMiddleware.run(rootSaga);
    store.close = () => store.dispatch(END);


    return store;
}
