import { Subscription } from 'rxjs';
import { FoodServiceService } from './../../../shared/food-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.scss']
})
export class TotalComponent implements OnInit {

  subscription: Subscription;
  totalPrice = 0;
  constructor(private foodService: FoodServiceService) { }

  ngOnInit(): void {
    this.subscription = this.foodService.getFoodList().subscribe(
      shoppingListArray => {
        shoppingListArray.forEach(element => {
          console.log('WAL :: element name', element.name);
          console.log('WAL :: element price', element.price);
          this.totalPrice += element.price * element.price;
        });
      }
    );
  }

}
