import { SagaIterator } from 'redux-saga';
import { takeEvery, call, put } from 'redux-saga/effects';

import apis from '../../apis';
import actions from '../../actions';
import types from '../../actionTypes';

export function* todoTest(action): SagaIterator {
  console.log({ action });
  try {
    const result = yield call(apis.todo.fakeApi);
    yield put(actions.todo.sagaSuccess(result));
    console.log({ result });
  } catch (e) {
    console.log(e);
  }
}

const watchTodoTest = takeEvery(types.todo.SAGA_TEST_REQUEST, todoTest);

export const watchers = [
  watchTodoTest,
];
