import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { FishRoutingModule } from './fish-routing.module';
import { FishComponent } from '../fish.component';



@NgModule({
  declarations: [
    FishComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FishRoutingModule
  ]
})
export class FishModule { }
