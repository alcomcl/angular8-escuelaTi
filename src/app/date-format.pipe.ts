import { Pipe, PipeTransform } from '@angular/core';

// Importacion de la libreria date-fns
import { format } from 'date-fns';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: Date, args: string = 'pppp'): any {
    return format(value, args);
  }

}
