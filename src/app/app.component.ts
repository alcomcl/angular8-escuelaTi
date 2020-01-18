import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'Primera Clase';
  public name = 'Alex Cofré';
  public rockBandName: string = '';
  public rockBands: string[] = ['Los Prisioneros', 'Los Cadilacs', 'Git'];


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


}
