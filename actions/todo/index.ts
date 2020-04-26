import { createAction } from 'redux-actions';

import types from '../../actionTypes/actionTypes';

export const todoIncrease = createAction(
  types.todo.INCREASE,
);
