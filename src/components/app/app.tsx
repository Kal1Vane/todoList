import ListTodo from '../list-todo/list-todo';
import AddTodoItem from '../add-todo-item/add-todo-item';


function App(): JSX.Element {
  return (
    <>
      <AddTodoItem />
      <ListTodo />
    </>
  );
}

export default App;
