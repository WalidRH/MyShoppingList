import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteModule } from './favroties/favorite/favorite.module';
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
import { FoodListRouterModule } from './food-list-router.module';



@NgModule({
  declarations: [
    VegetableComponent,
    LiqudeComponent,
    SucreComponent,
    MilkComponent,
    FlourComponent,
    CerealComponent,
    FruitsComponent,
    MeatComponent,
    FishComponent,
    EggsComponent
  ],
  imports: [
    CommonModule,
    FavoriteModule,
    SharedModule,
    FoodListRouterModule
  ]
})
export class FoodListModule { }
