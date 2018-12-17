import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { PriorizarTodosTerminadosPipe } from './pipes/priorizar-todos-terminados.pipe';
import { TodosTerminadosPipe } from './pipes/todos-terminados.pipe';
import { PriorizarTodoPipePipe } from './pipes/priorizar-todo-pipe.pipe';
import { TodosHechosPipePipe } from './pipes/todos-hechos-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    PriorizarTodosTerminadosPipe,
    TodosTerminadosPipe,
    PriorizarTodoPipePipe,
    TodosHechosPipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
