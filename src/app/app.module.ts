import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FoodServiceService } from './shared/food-service.service';
import { HttpFoodServiceService } from './shared/httpServices/http-food-service.service';
import { AuthInterceptorService } from './authentication/auth-interceptor.service';
import { SharedModule } from './shared/shared.module';
import { FoodListModule } from './food_component/food-list.module';
import { AuthenticationModuleModule } from './authentication/authentication-module/authentication-module.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent
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
    HttpClientModule,
    AuthenticationModuleModule,
    SharedModule,
    FoodListModule
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
