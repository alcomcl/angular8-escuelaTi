import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  name: string;
  users = [
    {
      name: 'Alex',
      number: 2
    },
    {
      name: 'Juan',
      number: 4
    }
  ]

  constructor() { }

  ngOnInit() {
  }


  addUser() {
    this.users.push({
      name: this.name,
      number: 15
    });
    this.name = '';
  }

 
}
