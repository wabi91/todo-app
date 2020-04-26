import { handleActions } from 'redux-actions';
import types from '../../actionTypes/actionTypes';

interface Item {
  id: string;
  contents: string;
  createdAt: string;
  updatedAt: string;
  relationIds: [number];
};

export interface InitialState {
  items: Item[];
  count: number;
};

export const initialState: InitialState = {
  items: [],
  count: 0,
};

export default handleActions({
  [types.todo.INCREASE]: (state: object, { payload: count }) => ({
    ...state,
    count,
  }),
}, initialState);
