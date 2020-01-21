import { Component, OnInit } from '@angular/core';

// Inyectamos el servicio
import { TodoService } from './../../services/todo.service';
// Importamos el modelo Todo
import { Todo } from 'src/app/models/todo.models';

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
      console.log(todo);
    },
    error => {
      console.log(error);
    });
  }

  updateTodo() {

  }

  onDeleteTodo(todoId: string) {
    console.log(todoId);
  }

}
