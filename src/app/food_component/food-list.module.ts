import { CerealModule } from './cereal/module/cereal.module';
import { EggsModule } from './eggs/module/eggs.module';
import { FishModule } from './fish/module/fish.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiqudeComponent } from './liqude/liqude.component';
import { SucreComponent } from './sucre/sucre.component';
import { MilkComponent } from './milk/milk.component';
import { FlourComponent } from './flour/flour.component';
import { FruitsComponent } from './fruits/fruits.component';
import { MeatComponent } from './meat/meat.component';
import { SharedModule } from '../shared/shared.module';
import { FoodListRouterModule } from './food-list-router.module';
import { VegetableModule } from './vegetable/module/vegetable.module';
import { FavoriteModule } from './favroties/module/favorites.module';
import { FlourModule } from './flour/module/flour.module';



@NgModule({
  declarations: [
    LiqudeComponent,
    SucreComponent,
    MilkComponent,
    FruitsComponent,
    MeatComponent,
  ],
  imports: [
    CommonModule,
    FavoriteModule,
    SharedModule,
    FoodListRouterModule,
    VegetableModule,
    FishModule,
    EggsModule,
    CerealModule,
    FlourModule
  ]
})
export class FoodListModule { }
