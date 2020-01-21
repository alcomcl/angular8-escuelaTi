import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// importamos el modelo Todo
import { Todo } from './../../models/todo.models';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input() todo: Todo;

  @Output() delete = new EventEmitter<string>();// Cada vez que se haga click en el boton eliminar, se notificara
                                                // al padre para que haga esta accion

  constructor() { }

  ngOnInit() {
  }

  deleteTodo() {
    this.delete.emit(this.todo.id)
  }

}
