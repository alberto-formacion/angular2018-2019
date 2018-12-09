import { Todo } from './../todo/todo';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priorizarTodoPipe',
  pure: false
})
export class PriorizarTodoPipePipe implements PipeTransform {

  transform(todos: Todo[]): Todo[] {
    return todos.filter(todo => !todo.terminado).sort((a, b) => (b.importante && !a.importante) ? 1 : -1);
  }

}
