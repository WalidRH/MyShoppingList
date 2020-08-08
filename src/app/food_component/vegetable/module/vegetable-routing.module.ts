import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { VegetableComponent } from '../vegetable.component';
import { AuthGuardService } from 'src/app/shared/auth-guard.service';
import { FoodEditComponent } from 'src/app/shared/food-edit/food-edit.component';

const vegetablesRouting = [
  {path: '', component: VegetableComponent, canActivateChild: [AuthGuardService], children: [
    {path: 'edit/:ref', component: FoodEditComponent}
  ]},
];

@NgModule({
  imports: [
    RouterModule.forChild(vegetablesRouting)
  ],
  exports: [
    RouterModule
  ]
})
export class VegetableRoutingModule { }
