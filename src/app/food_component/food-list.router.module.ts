import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteModule } from './favroties/module/favorites.module';
import { VegetableComponent } from './vegetable/vegetable.component';
import { LiqudeComponent } from './liqude/liqude.component';
import { SucreComponent } from './sucre/sucre.component';
import { MilkComponent } from './milk/milk.component';
import { FlourComponent } from './flour/flour.component';
import { CerealComponent } from './cereal/cereal.component';
import { FruitsComponent } from './fruits/fruits.component';
import { MeatComponent } from './meat/meat.component';
import { FishComponent } from './fish/fish.component';
import { EggsComponent } from './eggs/eggs.component';
import { SharedModule } from '../shared/shared.module';
import { FavrotiesComponent } from './favroties/favroties.component';
import { AuthGuardService } from '../shared/auth-guard.service';
import { FoodEditComponent } from '../shared/food-edit/food-edit.component';

const routesFoodCategories = [
  {path: 'MyList', component: FavrotiesComponent, canActivate: [AuthGuardService], canActivateChild: [AuthGuardService] , children: [
    {path: 'edit/:ref', component: FoodEditComponent}
  ]},
  {path: 'liqude', component: LiqudeComponent},
  {path: 'sucre', component: SucreComponent},
  {path: 'milk', component: MilkComponent},
  {path: 'flour', component: FlourComponent},
  {path: 'cereal', component: CerealComponent},
  {path: 'vegetbales', component: VegetableComponent, canActivateChild: [AuthGuardService], children: [
    {path: 'edit/:ref', component: FoodEditComponent}
  ]},
  {path: 'fruits', component: FruitsComponent},
  {path: 'meat', component: MeatComponent},
  {path: 'fish', component: FishComponent},
  {path: 'eggs', component: EggsComponent},
]

@NgModule({
  imports: [
    RouterModule.forChild(routesFoodCategories)
  ],
  exports: [
    RouterModule
  ]
})
export class FoodListRouterModule { }
