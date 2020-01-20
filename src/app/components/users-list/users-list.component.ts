import { Component, OnInit } from '@angular/core';

import { UsersService } from './../../services/users.service';

import { User } from './../../models/user.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users: User[] = [];

  constructor(
    private usersSerices: UsersService
  ) { }

  ngOnInit() {
    this.users = this.usersSerices.getAllUsers()
  }

}
