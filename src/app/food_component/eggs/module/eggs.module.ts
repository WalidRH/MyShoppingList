import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { EggsComponent } from '../eggs.component';
import { EggsRoutingModule } from './eggs-routing.module';



@NgModule({
  declarations: [
    EggsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    EggsRoutingModule
  ]
})
export class EggsModule { }
