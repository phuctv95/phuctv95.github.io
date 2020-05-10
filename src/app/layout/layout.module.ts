import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';
import { BodyComponent } from './body/body.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HeaderComponent, BodyComponent],
  imports: [
    CommonModule, RouterModule, SharedModule
  ],
  exports: [HeaderComponent, BodyComponent]
})
export class LayoutModule { }
