import { AuthResponsePayload } from './auth-response-payload.interface';
import { Injectable } from '@angular/core';
import { User } from './user.model';
import { throwError, BehaviorSubject } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  static LOGIN = 'login';
  static SUGNUP = 'signup';
  authenticatedUser = new  BehaviorSubject<User>(null);
  constructor( private http: HttpClient , private route: Router) { }

  authentication( emailInput: string, passwordInput: string, operation: string) {

    const url = (operation === AuthenticationService.LOGIN )
                ? 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDvBDwDRz-5qNwAHhzJwlztRMuj9qtQNpA'
                : 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDvBDwDRz-5qNwAHhzJwlztRMuj9qtQNpA';

    return this.http.post<AuthResponsePayload>(
      url,
      {
        email : emailInput ,
        password : passwordInput ,
        returnSecureToken : true
      }
    ).pipe(
      catchError(
        error => {
          console.log('ERROR ', error);
          let errorMessage = 'Error has occured';
          if ( !error.error.error) {
            return throwError(errorMessage);
          }
          switch (error.error.error.message) {
            case 'EMAIL_EXISTS' :
            errorMessage = 'The email address is already in use by another account.';
            break;

            case 'OPERATION_NOT_ALLOWED' :
            errorMessage = 'Password sign-in is disabled for this project.';
            break;

            case 'TOO_MANY_ATTEMPTS_TRY_LATER' :
            errorMessage = 'We have blocked all requests from this device due to unusual activity. Try again later.';
            break;

            case 'EMAIL_NOT_FOUND':
              errorMessage = 'There is no user record corresponding to this identifier. The user may have been deleted.';
              break;
            case 'INVALID_PASSWORD':
              errorMessage = 'The password is invalid or the user does not have a password.';
              break;
            case 'USER_DISABLED':
              errorMessage = 'The user account has been disabled by an administrator.';
              break;
          }
          return throwError(errorMessage);
        }
      ),
      tap(
        responseData => {
          // tslint:disable-next-line: max-line-length
          const expiredDate = new Date( new Date().getTime() + +responseData.expiresIn * 1000 ); // we added an extra + in front of responseData in order to convert it to number
          console.log('expiration Date ', expiredDate);
          const user = new User(responseData.email, responseData.localId, responseData.idToken, expiredDate);

          // Storing the User
          console.log('Store User => ', user);
          this.authenticatedUser.next(user);
          localStorage.setItem('UserData', JSON.stringify(user));
        }
      )
    );
  }

  autoLogin() {
    // retriving user's data from the local Storage, and parse it to JSON because in the data in the local storage is just a string
    const userData: {
      email: string,
      id: string,
      _TokenExpirationDate: string,
      _token: string
    } = JSON.parse(localStorage.getItem('UserData'));

    console.log('AutoLogin --> ');
    if ( !userData ) {
      return;
    }
    // set the data in a variable ( user object ) to emit it using BehaviorSubject
    const user: User = new User(userData.email, userData.id, userData._token, new Date(userData._TokenExpirationDate));
    console.log('Auto Login User ', user);
    console.log('Auto Login User Token ', user.token);
    if ( user.token ) {
      console.log('Auto Login User ', user);
      this.authenticatedUser.next(user);
    }
  }

}
