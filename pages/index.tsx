import React from 'react';

import { NextPage } from 'next';
import { useSelector, useDispatch } from 'react-redux';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { InitialStateType, selectors } from '../reducers';
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
  }),
);

const Index: NextPage = () => {
  const dispatch = useDispatch();
  const count = useSelector<InitialStateType, number>(selectors.selectCount);

  const classes = useStyles();

  const onIncrease = () => {
    dispatch(actions.todo.todoIncrease(count + 1));
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div className={classes.addContainer}>
            <TextField
              label="Todo Text"
              variant="outlined"
              className={classes.textField}
            />
            <Button variant="contained" color="primary">
              Add Todo
            </Button>
          </div>
        </Grid>
        <Grid item xs={12}>
          sdsadf
        </Grid>
      </Grid>
      {/* <div>{count}</div>
      <button onClick={onIncrease}>+</button> */}
    </div>
  );
};

export default Index;
