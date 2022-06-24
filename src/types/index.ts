export type TodoItem = {
  description: string,
  id : string,
  title : string,
  icon : NameFilter,
};

export enum NameFilter {
  ALL = 'All Todo',
  IMPORTANT = 'Important',
  JOB = 'Job',
  HOME = 'Home',
  FAVORITE = 'Favorite',
  DONE = 'Done',
}
export type TodoListRequest = {
  'userId': number,
  'id': number,
  'title': string,
  'completed': boolean,
}

export type PropsTodoItem = {
  item: TodoItem,
};
