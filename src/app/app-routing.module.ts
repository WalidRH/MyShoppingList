import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
{ path: '', redirectTo: '/auth', pathMatch: 'full'},
{ path: 'auth', loadChildren: './authentication/authentication-module/authentication-module.module#AuthenticationModuleModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
