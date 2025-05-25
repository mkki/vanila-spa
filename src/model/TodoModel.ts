export interface Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

export const todos: Todo[] = [
  {
    id: 1,
    title: 'todo 1',
    description: 'This is the first todo item',
    completed: false,
  },
  {
    id: 2,
    title: 'todo 2',
    description: 'This is the first todo item',
    completed: false,
  },
  {
    id: 3,
    title: 'todo 3',
    description: 'This is the first todo item',
    completed: true,
  },
  {
    id: 4,
    title: 'todo 4',
    description: 'This is the first todo item',
    completed: false,
  },
];
