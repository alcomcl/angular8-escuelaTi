import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Operator Map para transformar la llamada a la Api de usuarios
import { map } from 'rxjs/operators';

import { User } from './../models/user.model';

interface ResponseUsers {
  results: User[] ;
  info: any;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient
  ) { }


  getAllUsers(results: number = 5) {
    return this.http.get<ResponseUsers>('https://randomuser.me/api?results=${results}') 
    .pipe(
      map(response => response.results) // response es lo que devuelve el servidor
    );
  }
}
