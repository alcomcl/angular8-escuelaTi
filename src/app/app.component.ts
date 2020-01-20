import { Component } from '@angular/core';

// En este caso AppComponent se comportará como un Container. Enviará esta info a los componentes

interface User{
  name: string;
  age: number;
  isSingle: boolean;
  avatar: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'Primera Clase';
  public name = 'Alex Cofré';
  public rockBandName: '';
  public rockBands: string[] = ['Los Prisioneros', 'Los Cadilacs', 'Git'];
  public users: User[] = [
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

  changeTitle() {
    if (this.title === 'Primera Clase') {
      this.title = 'Hola Alex';
    } else {
      this.title = 'Primera Clase';
    }
  }

  changeName() {
    if (this.name === 'Nataly'){
      this.name = 'Alex Cofré';
    } else {
      this.name = 'Nataly';
    }
  }

  addRockBand(){
    this.rockBands.push(this.rockBandName);
    this.rockBandName = '';
  }

  empty() {
    this.rockBands = [];
  }

  deleteItem(index: number){
    this.rockBands.splice(index, 1)  // eliminamos solo un item
  }

  updateItem(index: number) {
    this.rockBands[index] = 'Se actualizo';
  }

}
