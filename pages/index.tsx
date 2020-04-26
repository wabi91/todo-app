import React, { useState, useEffect } from 'react';

import { NextPage } from 'next';
import { useSelector, useDispatch } from 'react-redux';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { initialStateType, selectors } from '../reducers';
import actions from '../actions';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: '10px',
      padding: '10px',
      border: '1px solid #bdbdbd',
      display: 'flex',
    },
    addContainer: {
      display: 'flex',
    },
    textField: {
      magin: 0,
    },
    itemWrap: {
      display: 'flex',

    },
  }),
);

type Item = {
  contents: string;
  isDone: boolean;
};

type NewItem = {
  contents: string;
};

const Index: NextPage = () => {
  const dispatch = useDispatch();
  const items = useSelector<initialStateType, Item[]>(selectors.getItems);
  const flag = useSelector<initialStateType, boolean>(selectors.getFlag);
  const classes = useStyles();

  const [value, setValue] = useState<string | undefined>('');
  const handleValue = (ev: React.ChangeEvent<HTMLTextAreaElement>): void => {
    const value = ev.target.value;
    setValue(value);
  };

  const addNewItem = (): void => {
    dispatch(actions.todo.addTodo({
      contents: value,
      isDone: false,
    }));
    setValue('');
  };
  const handleKeyPress = (ev: React.KeyboardEvent<HTMLDivElement>): void => {
    if (ev.key === 'Enter') addNewItem();
  };

  useEffect(() => {
    dispatch(actions.todo.sagaRequest());
  }, []);

  console.log({ flag });
  return (
    <div className={classes.root}>
      <div>test: {String(flag)}</div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div className={classes.addContainer}>
            <TextField
              label="Todo Text"
              variant="outlined"
              value={value}
              onChange={handleValue}
              onKeyPress= {handleKeyPress}
              className={classes.textField}
            />
            <Button variant="contained" color="primary" onClick={addNewItem}>
              Add Todo
            </Button>
          </div>
        </Grid>
        <Grid item xs={12}>
          {items.map((value: Item, idx: number) => (
            <div key={idx} className={classes.itemWrap}>
              <Grid item xs={8}>
                {value.contents}
              </Grid>
              <Grid item xs={4}>
                {value.isDone ? 'done' : 'not yet'}
              </Grid>
            </div>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default Index;
