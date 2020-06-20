import { Categorie } from './../Categorie';
import { FoodServiceService } from 'src/app/shared/food-service.service';
import { ShoppingItem } from 'src/app/shared/shopping-item.js';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, EventEmitter, Output, ViewChild, NgModule } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-food-edit',
  templateUrl: './food-edit.component.html',
  styleUrls: ['./food-edit.component.scss']
})
export class FoodEditComponent implements OnInit {

  @Output() navigation = new EventEmitter<{ isNavigate: boolean }>();
  @ViewChild('form') foodForm: NgForm;
  @ViewChild('priceFood') priceInput: NgModel;
  unitMeasurement: string[];
  price: number;
  unit: string;
  quantity: number;
  fragment : string;
  shoppingItemEdit: ShoppingItem;
  constructor(private currentRoute: ActivatedRoute, private route: Router, private foodService: FoodServiceService) {
  }

  ngOnInit(): void {
    this.unitMeasurement = ['Kg', 'g', 'L', 'ml', 'peace'];
    console.log('current route ', this.currentRoute);
    console.log('ngForm ', this.foodForm);
    // getting Food element info
    this.currentRoute.params.subscribe(
      params => {
        console.log('param ', params.ref);
        this.shoppingItemEdit = this.foodService.getFoodElement(params.ref);
        console.log(' Check list  ', this.shoppingItemEdit);
        if (this.shoppingItemEdit) {
          this.price = this.shoppingItemEdit.price;
          this.unit = this.shoppingItemEdit.unit;
          this.quantity = this.shoppingItemEdit.quantity;
        } else {
          console.log('return to parent');
          this.route.navigate(['.'], { relativeTo: this.currentRoute.parent});
        }
      }
    );

    // getting Fragement
    this.currentRoute.fragment.subscribe(
        fragment => {
          this.fragment = fragment;
        }
      );
    console.log('List FOOD ', this.foodService.getFoodList());
  }

  onSubmit() {
    const shoppingElement  = new ShoppingItem(
      this.shoppingItemEdit.ref
      , this.shoppingItemEdit.name
      , this.unit
      , this.quantity
      , this.price
      , this.shoppingItemEdit.photoURL
      );
    console.log('ARRAY categorie : ', this.foodService.getFoodArray());
    console.log('fragment');
    this.foodService.updateFoodElement(
      shoppingElement
      , Categorie.categorieType(this.fragment)
      , this.shoppingItemEdit.ref
      , null
      , false
    );
  }
}
