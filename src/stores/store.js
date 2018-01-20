import { createStore, applyMiddleware } from 'redux';'
import createSagaMiddleware from 'redux-saga';
import { reducer } from '../reducers';
import { saga } from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const store = (window.devToolExtention
  ? window.devToolExtention()(createStore)
  : createStore)(
    reducer,
    applyMiddleware(sagaMiddleware)
  );

sagaMiddleware(saga);

export default store;
