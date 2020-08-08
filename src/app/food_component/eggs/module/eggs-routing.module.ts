import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { EggsComponent } from '../eggs.component';

const eggsRouting = [
  {path: '', component: EggsComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(eggsRouting)
  ],
  exports: [
    RouterModule
  ]
})
export class EggsRoutingModule { }
