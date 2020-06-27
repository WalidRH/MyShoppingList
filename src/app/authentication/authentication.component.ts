import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  loginMode = true;
  emailForm: string;
  passForm: string;
  isSignup: boolean;
  isLoading = false;
  error: string;
  constructor(private authService: AuthenticationService, private route: Router) { }

  ngOnInit(): void {
  }

  submitButton() {
    const operation = (this.loginMode) ? 'login' : 'signup';
    this.isLoading = true;
    // tslint:disable-next-line: no-unused-expression
    this.authService.authentication(this.emailForm, this.passForm, operation).subscribe(
      responseData => {
        console.log('Response Data : ', responseData);
        console.log('Operation : ', !operation);
        console.log('responseData.idToken : ', responseData.idToken);
        this.isSignup = (!this.loginMode && responseData.idToken) ? true : false;
        console.log("SignUP : ", this.isSignup);
        this.isLoading = false;
        this.route.navigate(['/MyList']);
      },
      errorthrown => {
        console.log('ERROR ', errorthrown);
        this.error = errorthrown;
      }
    );
  }

  switching() {
    this.loginMode = !this.loginMode;
  }
}
