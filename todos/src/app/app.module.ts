import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { PriorizarTodoPipePipe } from './pipes/priorizar-todo-pipe.pipe';
import { TodosHechosPipePipe } from './pipes/todos-hechos-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    PriorizarTodoPipePipe,
    TodosHechosPipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
