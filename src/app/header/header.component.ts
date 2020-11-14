import { FoodServiceService } from './../shared/food-service.service';
import { AuthenticationService } from './../authentication/authentication.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslatorService } from '../shared/translator.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isAuthenticated: boolean;
  translate: TranslateService;
  constructor(private route: Router, private authService: AuthenticationService, private translator: TranslatorService) {}

  ngOnInit(): void {
    this.authService.authenticatedUser.subscribe(
      user => {
        this.isAuthenticated = (user) ? true : false;
      }
    );
    this.translate = this.translator.getTranslation();
    console.log('HEADER TRANSLATION INIT : ', this.translate);
  }

  authenticate() {
    this.route.navigate(['/auth']);
  }

  logout() {
    this.authService.logout();
  }

  translateTo(language: string) {
    this.translator.setLanguage(language);
  }
}
