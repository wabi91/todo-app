import { createAction } from 'redux-actions';

// TODO: 폴더 구조 1 depth page기준, 추가 & 나누기
import types from '../constants/actionTypes';

export const todoIncrease = createAction(
  types.INCREASE,
);
