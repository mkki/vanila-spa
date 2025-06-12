import { ViewModel } from '@/core/ViewModel';
import type { Todo } from '@/model/TodoModel';

export class TodoViewModel extends ViewModel<Todo[]> {
  constructor(todos: Todo[]) {
    super(todos);
  }

  toggleCompleted(index: number) {
    if (index < 0 || index >= this.state.length) {
      throw new Error('Index out of bounds');
    }
    this.state[index].completed = !this.state[index].completed;
    this.notify();
  }

  subscribe(callback: (todos: Todo[]) => void): void {
    super.subscribe(callback);
  }
}
