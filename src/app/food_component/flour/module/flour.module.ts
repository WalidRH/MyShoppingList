import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { FlourComponent } from '../flour.component';
import { FlourRoutingModule } from './flour-routing.module';



@NgModule({
  declarations: [
    FlourComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FlourRoutingModule
  ]
})
export class FlourModule { }
