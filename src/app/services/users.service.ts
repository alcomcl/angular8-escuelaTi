import { Injectable } from '@angular/core';

import { User } from './../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }


  getAllUsers(): User[] {
    return [
      {
        name: 'Alex',
        age: 32,
        isSingle: false,
        avatar: 'assets/images/img1.jpg'
      },
      {
        name: 'Nataly',
        age: 29,
        isSingle: true,
        avatar: 'assets/images/img1.jpg'
      }
    ];
  }
}
