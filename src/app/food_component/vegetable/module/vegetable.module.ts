import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VegetableComponent } from '../vegetable.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { VegetableRoutingModule } from './vegetable-routing.module';



@NgModule({
  declarations: [
    VegetableComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    VegetableRoutingModule
  ]
})
export class VegetableModule { }
