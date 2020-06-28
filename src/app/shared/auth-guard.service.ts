import { AuthenticationService } from './../authentication/authentication.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivateChild, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanActivateChild {

  constructor(private authService: AuthenticationService, private router: Router) { }

  // tslint:disable-next-line: max-line-length
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    console.log('WAL :: GUARD route ', route);
    console.log('WAL :: GUARD state ', state);
    return this.authService.authenticatedUser.pipe(
      map(
        user => {
          return !!user;
        }
      ),
      tap(
        boolResult => {
          if (!boolResult) {
            this.router.navigate(['/auth']);
          }
          return boolResult;
        }
      )
    );
  }

  // tslint:disable-next-line: max-line-length
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      return this.canActivate(childRoute, state);
  }
}
