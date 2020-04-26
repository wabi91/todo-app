import { combineReducers } from 'redux';
import todo, {
  initialState as todoState,
  initialStateType as todoStateType,
} from './todo';
import * as todoSelector from './todo/selector';

export type initialStateType = {
  todo: todoStateType,
};

export const initialState = {
  todo: todoState,
};

export const selectors = {
  ...todoSelector,
};

export default combineReducers({
  todo,
});
