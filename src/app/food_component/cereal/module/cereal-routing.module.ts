import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CerealComponent } from '../cereal.component';

const CerealRouting = [
  {path: '', component: CerealComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(CerealRouting)
  ],
  exports: [
    RouterModule
  ]
})
export class CerealRoutingModule { }
