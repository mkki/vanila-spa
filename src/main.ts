import { TodoViewModel } from '@/viewmodel/TodoViewModel';
import { todos } from '@/model/TodoModel';
import { TodoView } from '@/view/TodoView';
import '@/scss/global.scss';

const root = document.getElementById('app')!;

const todoView = new TodoView(root);
const todoViewModel = new TodoViewModel(todos);

todoViewModel.subscribe((todoList) => {
  todoView.render(
    todoList,
    (index) => {
      todoViewModel.toggleCompleted(index);
    }
  );
});
