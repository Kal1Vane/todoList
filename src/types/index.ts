export type TodoItem = {
  description: string,
  id : string,
  title : string,
  icon : TodoItemIcon,
};

export enum TodoItemIcon {
  DEFAULT = 'Default',
  IMPORTANT = 'Important',
  JOB = 'Job',
  HOME = 'Home',
}
