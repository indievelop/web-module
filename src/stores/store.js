import { applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createStore from './configureStore';
import { rootReducer } from '../reducers';
import { saga } from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const store = (window.devToolExtention
  ? window.devToolExtention()(createStore)
  : createStore)(
    rootReducer,
    applyMiddleware(sagaMiddleware)
  );

sagaMiddleware(saga);

export default store;
