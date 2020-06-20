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

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  authenticate(){
    this.route.navigate(['/auth']);
  }
}
