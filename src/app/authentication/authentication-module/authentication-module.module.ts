import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from '../authentication.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthenticationRoutingModule } from './authentication-route.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AuthenticationComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AuthenticationRoutingModule,
    SharedModule
  ],
  exports: [
  ]
})
export class AuthenticationModuleModule { }
