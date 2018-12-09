import { Todo } from './../todo/todo';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'todosHechosPipe',
  pure: false
})
export class TodosHechosPipePipe implements PipeTransform {

  transform(todos: Todo[]): Todo[] {
    return todos.filter(todo => todo.terminado);
  }

}
