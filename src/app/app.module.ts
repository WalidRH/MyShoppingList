import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { FavrotiesComponent } from './food_component/favroties/favroties.component';
import { VegetableComponent } from './food_component/vegetable/vegetable.component';
import { LiqudeComponent } from './food_component/liqude/liqude.component';
import { SucreComponent } from './food_component/sucre/sucre.component';
import { MilkComponent } from './food_component/milk/milk.component';
import { FlourComponent } from './food_component/flour/flour.component';
import { CerealComponent } from './food_component/cereal/cereal.component';
import { FruitsComponent } from './food_component/fruits/fruits.component';
import { MeatComponent } from './food_component/meat/meat.component';
import { FishComponent } from './food_component/fish/fish.component';
import { EggsComponent } from './food_component/eggs/eggs.component';
import { FoodItemComponent } from './shared/food-item/food-item.component';
import { FoodContentComponent } from './shared/food-item/food-content/food-content.component';
import { FoodEditComponent } from './shared/food-edit/food-edit.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FoodServiceService } from './shared/food-service.service';
import { HttpFoodServiceService } from './shared/httpServices/http-food-service.service';
import { AuthenticationComponent } from './authentication/authentication.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { AuthInterceptorService } from './authentication/auth-interceptor.service';
import { TranslatePipe } from './shared/translate.pipe';
import { TotalComponent } from './food_component/favroties/total/total.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FavrotiesComponent,
    VegetableComponent,
    LiqudeComponent,
    SucreComponent,
    MilkComponent,
    FlourComponent,
    CerealComponent,
    FruitsComponent,
    MeatComponent,
    FishComponent,
    EggsComponent,
    FoodItemComponent,
    FoodContentComponent,
    FoodEditComponent,
    AuthenticationComponent,
    LoadingSpinnerComponent,
    TranslatePipe,
    TotalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSliderModule,
    MatIconModule,
    MatSelectModule,
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [FoodServiceService, HttpFoodServiceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
