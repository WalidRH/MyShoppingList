import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FishComponent } from '../fish.component';

const fishRouting = [
  {path: '', component: FishComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(fishRouting)
  ],
  exports: [
    RouterModule
  ]
})
export class FishRoutingModule { }
