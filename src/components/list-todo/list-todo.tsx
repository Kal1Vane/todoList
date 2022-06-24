import { Button, List } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { ITEM_RENDER_PER_STEP } from '../../const';
import { removeTodo } from '../../store/data-store/data-store';
import { getLoaded, getTodoArray } from '../../store/data-store/selectors';
import { TodoItem as TodoItemType} from '../../types';
import TodoItem from '../list-item/list-item';
import './list-todo.css';

function ListTodo () :JSX.Element {
  const dispatch = useDispatch();
  const todoList = useSelector(getTodoArray);
  const isLoaded = useSelector(getLoaded);
  const [isLoadBtn,setLoadBtn] = useState<boolean>(false);
  const [todoListState,setTodoList] = useState<TodoItemType[]>(todoList);
  const [countLoad, setCountLoad] = useState<number>(ITEM_RENDER_PER_STEP);


  function removeTodoItem(evt: React.MouseEvent<HTMLUListElement, MouseEvent>) {
    const target = evt.target as HTMLElement;
    if ( target.tagName === 'BUTTON'){
      const id = target.dataset.id;
      dispatch(removeTodo(id));
    }
  }

  function onClickMoreLoad(){
    setCountLoad(countLoad + ITEM_RENDER_PER_STEP);
  }

  useEffect(() => {
    setTodoList(todoList.slice(0,countLoad));
    if (todoListState.length < todoList.length){
      setLoadBtn(true);
    } else {
      setLoadBtn(false);
    }
  }, [todoList, countLoad]);

  useEffect(() => {
    document.addEventListener('scroll' ,(scrollHandlerLoadItem));
    return () => document.removeEventListener('scroll' ,(scrollHandlerLoadItem));
  });

  function scrollHandlerLoadItem(){
    const scrollHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const scrollTop = document.documentElement.scrollTop;

    if ((scrollHeight - 200) < windowHeight + scrollTop  && todoListState.length < todoList.length ){
      setCountLoad(countLoad + ITEM_RENDER_PER_STEP);
    }
  }


  if (!isLoaded ){
    return <List >Loading....</List>;
  }
  if ( todoListState.length === 0 ){
    return <List > Todo List is empty</List>;
  }


  return (
    <>
      <List onClick={removeTodoItem}>
        {todoListState.map((item) => (
          <TodoItem
            key={item.id}
            item={item}
          />
        ))}
      </List>
      <div className='list__button'>
        {isLoadBtn && <Button onClick={onClickMoreLoad}>Load More</Button>}
      </div>
    </>
  );
}

export default ListTodo;
