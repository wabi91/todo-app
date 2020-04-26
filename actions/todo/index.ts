import { createAction, ActionType } from 'typesafe-actions';

import types from '../../actionTypes';

type Item = {
  contents: string;
  isDone: boolean;
};

export const addTodo = createAction(
  types.todo.ADD_TODO,
)<Item>();

export const sagaRequest = createAction(
  types.todo.SAGA_TEST_REQUEST,
)();

export const sagaSuccess = createAction(
  types.todo.SAGA_TEST_SUCCESS,
)<boolean>();

export const sagaFailure = createAction(
  types.todo.SAGA_TEST_FAILURE,
)();


const actions = {
  addTodo,
  sagaRequest, sagaSuccess, sagaFailure,
};
export type todoActions = ActionType<typeof actions>;
