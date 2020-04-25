import React from 'react';

import { NextPage } from 'next';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { InitialStateType, selectors } from '../reducers';
import { todoIncrease } from '../actions';


const Index: NextPage = () => {
  const dispatch = useDispatch();
  const count = useSelector<InitialStateType, number>(selectors.selectCount);

  const onIncrease = () => {
    dispatch(todoIncrease(count + 1));
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={onIncrease}>+</button>
      <Link href="/routertest">
        <a>routertest</a>
      </Link>
    </>
  );
};

export default Index;
