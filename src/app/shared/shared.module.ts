import { RouterModule } from '@angular/router';
import { FoodContentComponent } from './food-item/food-content/food-content.component';
import { FoodItemComponent } from './food-item/food-item.component';
import { FoodEditComponent } from './food-edit/food-edit.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    FoodEditComponent,
    FoodItemComponent,
    FoodContentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    LoadingSpinnerComponent,
    FoodEditComponent,
    FoodItemComponent
  ]
})
export class SharedModule { }
