import { AuthenticationService } from './authentication.service';
import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
  HttpParams,
  HttpHeaders,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { take, exhaustMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService {
  constructor( private authService: AuthenticationService ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let tokenParam: HttpParams;
    return this.authService.authenticatedUser.pipe(
      /**
       * take the user data only 1 time
       * this tells angular that I only want to take 1 value from 'authenticatedUser' Observable
       * and then automatically unsubscribe
       */
      take(1),
      // switching to another observable
      exhaustMap((authenticatedUser) => {
        if (!authenticatedUser) {
          return next.handle(req);
        }
        tokenParam = new HttpParams().set('auth', authenticatedUser.token);
        // cloning the request and adding headers and params
        const modifiedRequest = req.clone({
          headers: new HttpHeaders({
            Interceptor: 'activated',
          }),
          params: tokenParam,
        });
        return next.handle(modifiedRequest);
      })
    );
  }
}
