import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavrotiesComponent } from '../favroties.component';
import { FormsModule } from '@angular/forms';
import { TotalComponent } from '../total/total.component';
import { SharedModule } from '../../../shared/shared.module';



@NgModule({
  declarations: [
    FavrotiesComponent,
    TotalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ]
})
export class FavoriteModule { }
