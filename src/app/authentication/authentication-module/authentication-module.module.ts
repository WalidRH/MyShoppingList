import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from '../authentication.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from 'src/app/shared/translate.pipe';
import { AuthenticationRoutingModule } from './authentication-route.module';


@NgModule({
  declarations: [
    AuthenticationComponent,
    TranslatePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AuthenticationRoutingModule
  ],
  exports: [
    TranslatePipe
  ]
})
export class AuthenticationModuleModule { }
