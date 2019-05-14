/* eslint-disable generator-star-spacing */
import { all } from 'redux-saga/effects';
import { filmsSaga } from './actions/actions';


function* rootSaga () {
    yield all([
      filmsSaga()
    ]);
  }

  export default rootSaga;
