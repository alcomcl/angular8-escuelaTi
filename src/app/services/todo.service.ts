import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//Importamos el modelo para poder tipar la consulta a la Api
import { Todo } from './../models/todo.models';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public path: string = 'https://jsonplaceholder.typicode.com/todos';

  constructor(
    private http: HttpClient
  ) { }

  getAllTodos(){
    return this.http.get<Todo[]>(this.path)
  }

  createTodo(todo: Todo) {
    return this.http.post<Todo>(this.path, todo);
  }
}
