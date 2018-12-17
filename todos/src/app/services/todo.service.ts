import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private endpoint:string = "localhost:8080/todos";

  constructor(
    private http: HttpClient
  ) { }

  getTodos(){
    let tareas;
    this.http.get(this.endpoint).subscribe(todos =>{
      console.log(todos);
    });
  }
}
