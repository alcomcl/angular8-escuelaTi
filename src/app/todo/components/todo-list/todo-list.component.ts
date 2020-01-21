import { Component, OnInit } from '@angular/core';

// Inyectamos el servicio
import { TodoService } from '../../services/todo.service';
// Importamos el modelo Todo
import { Todo } from 'src/app/todo/models/todo.models';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  title: string;

  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit() {
    this.todoService.getAllTodos().subscribe(
      todos => {
        this.todos = todos;
      });
  }

  addTodo() {
    const newTodo: Todo = {
      title: this.title,
      id: '2000',
      userId: '1',
      completed: false
    }
    this.todoService.createTodo(newTodo)
    .subscribe(
      todo => {
      // console.log(todo);
      // Si la peticion es correcta, agegamos la tarea al array todos[]
      this.todos.unshift(todo); // agregamos la tarea al principio del array
    },
    error => {
      console.log(error);
    });
  }

  onDeleteTodo(todoId: string, index: number) {
    console.log(todoId, index) // Para debuguear
    this.todoService.deleteTodo(todoId)
    .subscribe(response => {
      //console.log(response);
      this.todos.splice(index,1); // Eliminamos segun indice que llega por parametro
    },
    error => {
      console.log(error);
    });
  }

  onUpdateTodo(todo: Todo, index: number) {
    this.todoService.updateTodo(todo)
    .subscribe( response => {
      this.todos[index] = response;
    },
    error => {
      console.log(error);
    });
  }

}
