import { Button, Grid, Typography } from '@mui/material';
import TextField from '@mui/material/TextField/TextField';
import { useState } from 'react';
import ListTodo from '../list-todo/list-todo';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/data-store/data-store';


function App(): JSX.Element {
  const [isDisabledBtn,setDisabledBtn] = useState<boolean>(true);
  const [valueInput,setValueInput] = useState<string>('');

  const dispatch = useDispatch();


  function addTodoList(){
    dispatch(addTodo(valueInput));
    setDisabledBtn(true);
    setValueInput('');
  }


  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={4}
      >
        <Grid xs={12} item>
          <Typography color="secondary" textAlign="center" variant='h1'>Write a task that needs to be done</Typography>
        </Grid>
        <Grid xs={12} spacing={2} container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid xs={12} item>
            <TextField
              required
              id="outlined-basic"
              label="Write task"
              variant="outlined"
              value={valueInput}
              onChange={(evt) => {
                if (evt.target.value !== null){
                  setValueInput(evt.target.value);
                  setDisabledBtn(false);
                }
              }}
            />
          </Grid>
          <Grid
            xs={12} item
          >
            <Button
              variant="contained"
              color="primary"
              onClick={addTodoList}
              disabled={isDisabledBtn}
            >
        Add for Todo
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <ListTodo />
    </>
  );
}

export default App;
