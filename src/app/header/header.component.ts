import { FoodServiceService } from './../shared/food-service.service';
import { AuthenticationService } from './../authentication/authentication.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  listLanguage = [
   "FR",
   "EN",
   "AR"
  ];
  isAuthenticated: boolean;

  constructor(private route: Router, private authService: AuthenticationService, private foodService: FoodServiceService) { }

  ngOnInit(): void {
    this.authService.authenticatedUser.subscribe(
      user => {
        this.isAuthenticated = (user) ? true : false;
      }
    );
  }

  authenticate() {
    this.route.navigate(['/auth']);
  }

  logout() {
    this.authService.logout();
  }

  translateTo(language: string ) {
    this.foodService.translation.next(language);
    console.log('WAL :: LANGUAGE ', language);
  }
}
