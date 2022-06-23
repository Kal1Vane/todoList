import { Delete, Folder } from '@mui/icons-material';
import { List, ListItem, IconButton, ListItemAvatar, Avatar, ListItemText } from '@mui/material';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeTodo } from '../../store/data-store/data-store';
import { getTodoArray } from '../../store/data-store/selectors';

function ListTodo () :JSX.Element {
  const dispatch = useDispatch();
  const todoList = useSelector(getTodoArray);

  function removeTodoItem(evt: React.MouseEvent<HTMLUListElement, MouseEvent>) {
    const target = evt.target as HTMLElement;

    if ( target.tagName === 'BUTTON'){
      const id = target.dataset.id;
      dispatch(removeTodo(id));
    }
  }

  return (

    <List onClick={removeTodoItem}>
      { todoList ?  todoList.map((item) => (
        <ListItem
          key={item.id}
          secondaryAction={
            <IconButton
              data-id={item.id}
              edge="end" aria-label="delete"
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
  );
}

export default ListTodo;
