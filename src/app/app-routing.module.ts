import { FoodEditComponent } from './shared/food-edit/food-edit.component';
import { FavrotiesComponent } from './food_component/favroties/favroties.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LiqudeComponent } from './food_component/liqude/liqude.component';
import { SucreComponent } from './food_component/sucre/sucre.component';
import { MilkComponent } from './food_component/milk/milk.component';
import { FlourComponent } from './food_component/flour/flour.component';
import { CerealComponent } from './food_component/cereal/cereal.component';
import { FruitsComponent } from './food_component/fruits/fruits.component';
import { MeatComponent } from './food_component/meat/meat.component';
import { FishComponent } from './food_component/fish/fish.component';
import { EggsComponent } from './food_component/eggs/eggs.component';
import { VegetableComponent } from './food_component/vegetable/vegetable.component';


const routes: Routes = [
{path:'', component:FavrotiesComponent},
{path:'My List', component:FavrotiesComponent},
{path:'liqude', component:LiqudeComponent},
{path:'sucre', component:SucreComponent},
{path:'milk', component:MilkComponent},
{path:'flour', component:FlourComponent},
{path:'cereal', component:CerealComponent},
{path:'vegetbales', component:VegetableComponent, children:[
  {path:'edit/:ref', component:FoodEditComponent}
]},
{path:'fruits', component:FruitsComponent},
{path:'meat', component:MeatComponent},
{path:'fish', component:FishComponent},
{path:'eggs', component:EggsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
