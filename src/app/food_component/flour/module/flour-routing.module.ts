import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FlourComponent } from '../flour.component';

const flourRouting = [
  {path: 'flour', component: FlourComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(flourRouting)
  ],
  exports: [
    RouterModule
  ]
})
export class FlourRoutingModule { }
