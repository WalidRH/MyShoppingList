import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { FavoriteRoutingModule } from './favorites-routing.module';
import { FavrotiesComponent } from '../favroties.component';
import { TotalComponent } from '../total/total.component';



@NgModule({
  declarations: [
    FavrotiesComponent,
    TotalComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FavoriteRoutingModule
  ]
})
export class FavoriteModule { }
