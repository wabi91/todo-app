import {
  createStore,
  applyMiddleware,
  compose,
  Store as ReduxStore,
} from 'redux';

import createSagaMiddleware, { Task } from 'redux-saga';
import rootSaga from '../sagas';
import rootReducer, { initialStateType } from '../reducers';

interface WithSagaTaskStore extends ReduxStore {
  sagaTask?: Task;
};

function configureStore(state: initialStateType): WithSagaTaskStore {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware]; // 미들웨어 연결
  const store: WithSagaTaskStore = createStore(
    rootReducer,
    state,
    compose(applyMiddleware(...middlewares)),
  );

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
}

export default configureStore;
