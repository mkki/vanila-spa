import type { Todo } from '@/model/TodoModel';

export class TodoView {
  private root: HTMLElement;

  constructor(root: HTMLElement) {
    this.root = root;
  }

  private createTodoItem(
    todo: Todo,
    index: number,
    onToggle?: (index: number) => void
  ): HTMLLIElement {
    const li = document.createElement('li');
    li.className = 'todo-item';

    if (todo.completed) {
      li.classList.add('completed');
    }

    const label = document.createElement('label');
    label.className = 'todo-checkbox';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;

    const title = document.createElement('strong');
    title.className = 'todo-title';
    title.textContent = todo.title;

    label.appendChild(checkbox);
    label.appendChild(title);

    const description = document.createElement('p');
    description.className = 'todo-description';
    description.textContent = todo.description;

    li.appendChild(label);
    li.appendChild(description);

    if (onToggle) {
      checkbox.addEventListener('click', (e) => {
        e.stopPropagation();
        onToggle(index);
      });
    }

    return li;
  }

  render(todos: Todo[], onToggle?: (index: number) => void) {
    const existing = this.root.querySelector('.todo-list');
    if (existing) existing.remove();

    const fragment = document.createDocumentFragment();

    const ul = document.createElement('ul');
    ul.className = 'todo-list';

    todos.forEach((todo, index) => {
      const li = this.createTodoItem(todo, index, onToggle);
      ul.appendChild(li);
    });

    fragment.appendChild(ul);
    this.root.appendChild(fragment);
  }
}
