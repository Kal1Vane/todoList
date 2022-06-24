import { List } from '@mui/material';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeTodo } from '../../store/data-store/data-store';
import { getLoaded, getTodoArray } from '../../store/data-store/selectors';
import TodoItem from '../list-item/list-item';
import './list-todo.css';

function ListTodo () :JSX.Element {
  const dispatch = useDispatch();
  const todoList = useSelector(getTodoArray);
  const isLoaded = useSelector(getLoaded);
  function removeTodoItem(evt: React.MouseEvent<HTMLUListElement, MouseEvent>) {
    const target = evt.target as HTMLElement;
    if ( target.tagName === 'BUTTON'){
      const id = target.dataset.id;
      dispatch(removeTodo(id));
    }
  }

  if (!isLoaded ){
    return <List >Loading....</List>;
  }
  if ( todoList.length === 0 ){
    return <List > Todo List is empty</List>;
  }


  return (

    <List onClick={removeTodoItem}>
      {todoList.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
        />
      ))}
    </List>
  );
}

export default ListTodo;
