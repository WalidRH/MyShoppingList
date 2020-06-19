import { Categorie } from './Categorie';
import { Injectable } from '@angular/core';
import foods from '../../assets/food.json';
import { ShoppingItem } from './shopping-item.js';
import { Subject, Subscription } from 'rxjs';
import { HttpFoodServiceService } from './httpServices/http-food-service.service';

@Injectable({
  providedIn: 'root'
})
export class FoodServiceService {

  private listFood = new Subject<ShoppingItem[]>();
  private shoppingArrayFood: ShoppingItem[];
  errorThorwn = new Subject<string>();

  constructor(private httpFoodService: HttpFoodServiceService) { }

  setArray(type: string) {
    this.shoppingArrayFood = new Array<ShoppingItem>();
    console.log("Categire type ", Categorie.categorieType(type));
    this.httpFoodService.getFoodCategorie(
      Categorie.categorieType(type)
    )
      .subscribe(
        (arrayFood: { ShoppingItem }) => {
          console.log("ArrayFOOD ==> ",arrayFood);
          if (arrayFood) {
            for (let element in arrayFood) {
              this.shoppingArrayFood.push({ ref: element, ...arrayFood[element] });
            }
            console.log("Element Ref : ", this.shoppingArrayFood);
            this.listFood.next(this.shoppingArrayFood);
          }
          else {
            this.errorThorwn.next(" ERROR OCCURED : Data Empty ");
            console.log("ERROR ", this.errorThorwn);
          }
        },
        error => {
          this.errorThorwn.next("ERROR OCCURED : Please check your connection");
        }
      );

  }

  setListElement(categorie: string) {
    foods.VEGETABLES.forEach(element => {
      let newFoodElement = new ShoppingItem(null, element.name, element.unit, element.quantity, element.price, element.photoURL);
      this.httpFoodService.postFoodCategorie(categorie, newFoodElement).subscribe(
        data => {
          console.log("DATA  = ", data);
        },
        error => {
          this.errorThorwn.next("ERROR OCCURED : Please check your connection");
          console.log("ERROR  = ", this.errorThorwn);

        }
      );
    });
  }


  updateFoodElement(newElement: ShoppingItem, categorie: string, ref: string) {
    this.httpFoodService.setFoodCategorie(categorie, newElement, ref).subscribe(
      DataResponse => {
        console.log("GET DataResponse ", DataResponse.name);
        let index = this.shoppingArrayFood.indexOf(this.getFoodElement(ref));
        this.shoppingArrayFood[index] = DataResponse;
      },
      error => {
        console.log("ERROR = ", error);
        this.errorThorwn.next("ERROR OCCURED : Please check your connection");
      }
    )
  }

  getFoodArray(): ShoppingItem[] {
    return this.shoppingArrayFood;
  }

  getFoodList(): Subject<ShoppingItem[]> {
    return this.listFood;
  }

  unsubscibeComponent() {
    this.shoppingArrayFood = null;
    this.errorThorwn = new Subject<string>();;
  }


  getFoodElement(reference: string): ShoppingItem {
    console.log(" CHECK ARRAY  ", this.shoppingArrayFood);
    if (this.shoppingArrayFood) {
      console.log("Reference ", reference);
      return this.shoppingArrayFood.find(element => element.ref === reference);
    }
  }

}
