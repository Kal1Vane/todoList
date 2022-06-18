import { Button, Grid, IconButton, List, ListItemAvatar, Typography } from '@mui/material';
import TextField from '@mui/material/TextField/TextField';
import { useState } from 'react';
import { Delete,Folder } from '@mui/icons-material';
import ListItem from '@mui/material/ListItem';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import { TodoItem, TodoItemIcon } from '../../types';
import { nanoid } from 'nanoid';


function App(): JSX.Element {
  const [todoList,setTodoList] = useState<TodoItem[]>([]);
  const [isDisabledBtn,setDisabledBtn] = useState<boolean>(true);
  const [valueInput,setValueInput] = useState<string>('');

  function addTodoList(){
    const copy = Object.assign([], todoList);

    if (valueInput !== null){
      copy.push({
        title : valueInput,
        id : nanoid(),
        description: 'test',
        icon : TodoItemIcon.DEFAULT,
      });
    }
    setTodoList(copy);
    setDisabledBtn(true);
    setValueInput('');
  }

  function removeTodoItem(id : string){
    const copy = Object.assign([], todoList);
    const indexItem = copy.findIndex((todo: TodoItem) => todo.id === id);
    copy.splice(indexItem,1);
    setTodoList(copy);
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


      <List>
        { todoList ?  todoList.map((item) => (
          <ListItem
            key={item.id}
            secondaryAction={
              <IconButton onClick={() => {
                removeTodoItem(item.id);
              }} edge="end" aria-label="delete"
              >
                <Delete />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar>
                <Folder />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={item.title}
              secondary={item.description ? item.description : ''}
            />
          </ListItem>)) :
          'Todo List is empty'}
      </List>
    </>
  );
}

export default App;
