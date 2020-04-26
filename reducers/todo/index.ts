import { createReducer } from 'typesafe-actions';
import produce from "immer"

import types from '../../actionTypes';
import { todoActions } from '../../actions/todo';

type Item = {
  contents: string;
  isDone: boolean;
};

export interface initialStateType {
  items: Item[];
  flag: boolean;
};

export const initialState: initialStateType = {
  items: [
    {
      contents: 'test first item',
      isDone: false,
    },
  ],
  flag: false,
};

export default createReducer<initialStateType, todoActions>(initialState, {
  [types.todo.ADD_TODO]: (state, { payload: item }) => {
    return produce(state, (draft) => {
      draft.items.push(item);
    });
  },
  [types.todo.SAGA_TEST_SUCCESS]: (state, { payload: flag }) => {
    return produce(state, (draft) => {
      draft.flag = flag;
    });
  },
});
