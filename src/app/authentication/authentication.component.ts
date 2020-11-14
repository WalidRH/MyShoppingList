import { TranslatorService } from './../shared/translator.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit, AfterViewChecked {

  loginMode = true;
  emailForm: string;
  passForm: string;
  isLoading = false;
  error: string;
  translate: TranslateService;
  constructor(private authService: AuthenticationService, private route: Router, private translator: TranslatorService) {}

  ngOnInit(): void {
    this.translate = this.translator.getTranslation();
    console.log('INIT TRANSLATOR : ', this.translate);
  }

  ngAfterViewChecked(): void {
    console.log('CHANGE LANGUAGE AUTHENTICATION : ', this.translate);
    this.translate = this.translator.getTranslation();
    console.log('TRANSLATOR :: ', this.translate );
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
