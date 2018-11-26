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
  public todo: Todo = new Todo("");

  constructor() { }

  ngOnInit() {
    this.todos.push(new Todo("Sacar la basura"));
    this.todos.push(new Todo("Pasear a Goku"));
  }

  addTodo(){
    const nuevoTodo = new Todo(this.todo.tarea);
    this.todos.push(nuevoTodo);
    this.todo.tarea="";
  }

}
