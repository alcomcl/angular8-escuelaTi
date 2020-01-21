import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoListComponent } from './../todo/components/todo-list/todo-list.component';
import { TodoComponent } from './../todo/components/todo/todo.component';
import { FormsModule } from '@angular/forms';
import { TodoService } from './../todo/services/todo.service';


@NgModule({
  declarations: [
    TodoListComponent,
    TodoComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    FormsModule
  ],
  providers: [
    TodoService
  ]
})
export class TodoModule { }
