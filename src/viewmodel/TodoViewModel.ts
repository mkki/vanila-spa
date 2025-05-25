import type { Todo } from '@/model/TodoModel';

type Subscriber = (todos: Todo[]) => void;

export class TodoViewModel {
  private todos: Todo[];
  private subscribers: Subscriber[];

  constructor(todos: Todo[]) {
    this.todos = todos;
    this.subscribers = [];
  }

  toggleCompleted(index: number) {
    this.todos[index].completed = !this.todos[index].completed;
    this.notify();
  }
  subscribe(callback: Subscriber): void {
    this.subscribers.push(callback);
    callback(this.todos);
  }

  private notify(): void {
    this.subscribers.forEach((callback) => callback(this.todos));
  }
}
