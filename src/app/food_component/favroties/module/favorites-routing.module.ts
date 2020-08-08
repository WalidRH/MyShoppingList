import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuardService } from 'src/app/shared/auth-guard.service';
import { FoodEditComponent } from 'src/app/shared/food-edit/food-edit.component';
import { FavrotiesComponent } from '../favroties.component';

const favoriteRouting = [
  {path: '', component: FavrotiesComponent, canActivate: [AuthGuardService], canActivateChild: [AuthGuardService] , children: [
    {path: 'edit/:ref', component: FoodEditComponent}
  ]},
];

@NgModule({
  imports: [
    RouterModule.forChild(favoriteRouting)
  ],
  exports: [
    RouterModule
  ]
})
export class FavoriteRoutingModule { }
