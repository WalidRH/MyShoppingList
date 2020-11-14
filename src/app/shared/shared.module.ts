import { HeaderComponent } from './../header/header.component';
import { RouterModule } from '@angular/router';
import { FoodContentComponent } from './food-item/food-content/food-content.component';
import { FoodItemComponent } from './food-item/food-item.component';
import { FoodEditComponent } from './food-edit/food-edit.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    FoodEditComponent,
    FoodItemComponent,
    FoodContentComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    MatToolbarModule,
    MatSliderModule,
    MatIconModule,
    MatSelectModule,
    TranslateModule.forChild()
  ],
  exports: [
    LoadingSpinnerComponent,
    FoodEditComponent,
    FoodItemComponent,
    TranslateModule,
    MatToolbarModule,
    MatSliderModule,
    MatIconModule,
    MatSelectModule,
    HeaderComponent
  ]
})
export class SharedModule { }
