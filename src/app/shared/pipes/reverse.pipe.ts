import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  // Pipe creado para recibir una cadena y devolverla al reves
  transform(value: string): any {
    return value.split('').reverse().join('');
  }

}
