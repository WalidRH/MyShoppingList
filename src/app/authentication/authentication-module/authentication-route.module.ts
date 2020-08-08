import { NgModule } from '@angular/core';
import { AuthenticationComponent } from '../authentication.component';
import { Routes, RouterModule } from '@angular/router';

const authenticationRoute: Routes = [
  {path: '', component: AuthenticationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(authenticationRoute)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
