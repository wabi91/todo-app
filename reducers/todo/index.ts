import { handleActions } from 'redux-actions';
import types from '../../constants/actionTypes';

interface Item {
  value: string;
};

export interface InitialState {
  item: Item;
  count: number;
};

export const initialState: InitialState = {
  item: {
    value: '',
  },
  count: 0,
};

export default handleActions({
  [types.INCREASE]: (state: object, { payload: count }) => ({
    ...state,
    count,
  }),
}, initialState);
