import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo/todo';

@Pipe({
  name: 'priorizarTodosTerminados'
})
export class PriorizarTodosTerminadosPipe implements PipeTransform {

  transform(todos: Array<Todo>): Array<Todo> {
    return todos.filter(todo => !todo.terminado).sort((a,b) => (b.importante && !a.importante) ? 1 : -1);
  }

}
