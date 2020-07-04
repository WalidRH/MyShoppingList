import { Component, OnInit } from '@angular/core';
import menu  from '../../assets/menu_items.json';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuItems: {name : string }[];
  constructor() { }

  ngOnInit(): void {
    this.menuItems = menu;

    console.log("MENU ==> ", this.menuItems);
  }

}
