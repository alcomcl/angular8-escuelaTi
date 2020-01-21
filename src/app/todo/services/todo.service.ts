import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//Importamos el modelo para poder tipar la consulta a la Api
import { Todo } from '../models/todo.models';

@Injectable()
export class TodoService {

  public path: string = 'https://jsonplaceholder.typicode.com/todos';

  constructor(
    private http: HttpClient
  ) { }

  // Estos servicios siempre devolveran un Observable. Cuando se haga la peticion en todo-list.component.ts 
  // se tendran que suscribir a ese Observable.

  getAllTodos(){
    return this.http.get<Todo[]>(this.path)
  }

  createTodo(todo: Todo) {
    return this.http.post<Todo>(this.path, todo);
  }

  deleteTodo(todoId: string){
    const url = `${this.path}/${todoId}`;
    return this.http.delete(url);
  }

  updateTodo(todo: Todo) {
    const url = `${this.path}/${todo.id}`;
    return this.http.put<Todo>(url, todo);
  }
}
