import { combineReducers } from 'redux';
import todo, {
  initialState as todoState,
  InitialState as TodoState
} from './todo';
import * as todoSelector from './todo/selector';

export type InitialStateType = {
  todo: TodoState,
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
