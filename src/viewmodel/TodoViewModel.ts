import { ViewModel } from '@/core/ViewModel';
import type { Todo } from '@/model/TodoModel';

export class TodoViewModel extends ViewModel<Todo[]> {
  private todos: Todo[];

  constructor(todos: Todo[]) {
    super();
    this.todos = todos;
  }

  toggleCompleted(index: number) {
    this.todos[index].completed = !this.todos[index].completed;
    this.notify(this.todos);
  }

  subscribe(callback: (todos: Todo[]) => void): void {
    super.subscribe(callback);
    callback(this.todos);
  }

  getTodos(): Todo[] {
    return this.todos;
  }
}
