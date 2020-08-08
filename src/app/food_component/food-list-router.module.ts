import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LiqudeComponent } from './liqude/liqude.component';
import { SucreComponent } from './sucre/sucre.component';
import { MilkComponent } from './milk/milk.component';
import { FlourComponent } from './flour/flour.component';
import { FruitsComponent } from './fruits/fruits.component';
import { MeatComponent } from './meat/meat.component';
import { FishComponent } from './fish/fish.component';

const routesFoodCategories = [
  {path: 'MyList', loadChildren: './favroties/module/favorites.module#FavoriteModule'},
  {path: 'liqude', component: LiqudeComponent},
  {path: 'sucre', component: SucreComponent},
  {path: 'milk', component: MilkComponent},
  {path: 'flour', loadChildren: './flour/module/flour.module#FlourModule'},
  {path: 'cereal', loadChildren: './cereal/module/cereal.module#CerealModule'},
  {path: 'fruits', component: FruitsComponent},
  {path: 'meat', component: MeatComponent},
  {path: 'fish', loadChildren: './fish/module/fish.module#fishModule'},
  {path: 'eggs',  loadChildren: './eggs/module/eggs.module#EggsModule'},
  {path: 'vegetbales', loadChildren: './vegetable/module/vegetable.module#VegetableModule'}
];

@NgModule({
  imports: [
    RouterModule.forChild(routesFoodCategories)
  ],
  exports: [
    RouterModule
  ]
})
export class FoodListRouterModule { }
