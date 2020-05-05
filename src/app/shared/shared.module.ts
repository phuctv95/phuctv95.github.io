import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PositionDirective } from './position.directive';



@NgModule({
  declarations: [PositionDirective],
  imports: [
    CommonModule
  ],
  exports: [PositionDirective]
})
export class SharedModule { }
