import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { CerealComponent } from '../cereal.component';
import { CerealRoutingModule } from './cereal-routing.module';



@NgModule({
  declarations: [
    CerealComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CerealRoutingModule
  ]
})
export class CerealModule { }
