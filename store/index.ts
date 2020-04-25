import {
  createStore,
  applyMiddleware,
  compose,
  Store as ReduxStore,
} from 'redux';

import rootReducer, { initialState } from '../reducers';

export type Store = ReduxStore<typeof initialState>;

export default (state = initialState): Store => {
  return createStore(rootReducer, state);
};
