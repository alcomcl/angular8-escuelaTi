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
  limit: number;

  constructor(
    private usersSerices: UsersService
  ) { }

  ngOnInit() {
    
 }

 fetchUser() {
    console.log(this.limit)
    this.usersSerices.getAllUsers(this.limit).subscribe(users => {
    this.users = users;
  });
 }

} 
