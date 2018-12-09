import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';
import { TargetLocator } from 'selenium-webdriver';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  public todos: Array<Todo> = [];
  public todo: Todo = new Todo('', false, false);

  constructor() { }

  ngOnInit() {
    this.todos.push(new Todo('Sacar la basura', false, false));
    this.todos.push(new Todo('Pasear a Goku', true, false));
    this.todos.push(new Todo('Cargar la Switch', true, true));
  }

  addTodo() {
    const nuevoTodo = new Todo(this.todo.tarea, this.todo.importante, false);
    this.todos.push(nuevoTodo);
    this.todo = new Todo('', false, false);
  }

  cambiarEstado(todo: Todo) {
    todo.terminado = !todo.terminado;
  }

  setTodoClasses(todo: Todo) {
    const clases: Array<string> = [];
    if (todo.terminado) {
      clases.push('terminado');
    }

    if (todo.importante) {
      clases.push('importante');
    }

    return clases;
  }

}
