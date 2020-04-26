import { SagaIterator } from 'redux-saga';
import { all } from 'redux-saga/effects';

import { watchers as todoWatchers } from './todo';

const sagas = [
  ...todoWatchers,
];

export default function* rootSaga(): SagaIterator {
  yield all(sagas);
}
