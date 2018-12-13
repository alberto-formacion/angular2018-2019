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
  public todo: Todo = new Todo("", false, false);

  constructor() { }

  ngOnInit() {
    this.todos.push(new Todo("Sacar la basura", false, false));
    this.todos.push(new Todo("Pasear a Goku", true, false));
  }

  addTodo(){
    const nuevoTodo = new Todo(this.todo.tarea, this.todo.importante, false);

    //this.todos.push(nuevoTodo);
    this.todos = [...this.todos, nuevoTodo];

    this.todo =  new Todo("", false, false);
  }

  cambiarEstado(todo: Todo){
    //todo.terminado = !todo.terminado;
    let terminado = !todo.terminado;
    const todoIndex = this.todos.indexOf(todo);
    let nuevoTodo = new Todo(todo.tarea,todo.importante, terminado);

    this.todos = [
      ...this.todos.slice(0, todoIndex),
      nuevoTodo,
      ...this.todos.slice(todoIndex+1)
    ];
  }

  cambiarClasesTodo(todo: Todo): Array<string>{
    const clases: Array<string> = [];
    if(todo.terminado){
      clases.push("terminado");
    }

    if(todo.importante){
      clases.push("importante");
    }

    return clases;
  }

}
