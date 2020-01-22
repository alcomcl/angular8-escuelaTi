import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighlightDirective } from './directives/highlight.directive';
import { FibonacciPipe } from './pipes/fibonacci.pipe';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { ReversePipe } from './pipes/reverse.pipe';



@NgModule({
  declarations: [
    HighlightDirective,
    FibonacciPipe,
    DateFormatPipe,
    ReversePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HighlightDirective,
    FibonacciPipe,
    DateFormatPipe,
    ReversePipe
  ]
})
export class SharedModule { }
