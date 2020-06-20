import { AuthenticationService } from './authentication/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'MyShoppingList';
  
  constructor(private authService: AuthenticationService){}

  ngOnInit() {
    this.authService.autoLogin();
  }
}
