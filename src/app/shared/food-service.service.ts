import { Categorie } from './Categorie';
import { Injectable } from '@angular/core';
import foods from '../../assets/food.json';
import { ShoppingItem } from './shopping-item.js';
import { Subject, Subscription } from 'rxjs';
import { HttpFoodServiceService } from './httpServices/http-food-service.service';

@Injectable({
  providedIn: 'root',
})
export class FoodServiceService {
  private listFood = new Subject<ShoppingItem[]>();
  private shoppingArrayFood: ShoppingItem[];
  errorThorwn = new Subject<string>();
  translation = new Subject<string>();
  Subscription: Subscription;

  constructor(private httpFoodService: HttpFoodServiceService) {}

  setArray(type: string) {
    this.shoppingArrayFood = new Array<ShoppingItem>();
    console.log(
      'FoodServiceService :: Categire type ',
      Categorie.categorieType(type)
    );
    this.httpFoodService
      .getFoodCategorie(Categorie.categorieType(type))
      .subscribe(
        (arrayFood: { ShoppingItem }) => {
          console.log('FoodServiceService :: ArrayFOOD ==> ', arrayFood);
          if (arrayFood) {
            // tslint:disable-next-line: forin
            for (const element in arrayFood) {
              this.shoppingArrayFood.push({
                ref: element,
                ...arrayFood[element],
              });
            }
            console.log(
              'FoodServiceService :: Element Ref : ',
              this.shoppingArrayFood
            );
            this.listFood.next(this.shoppingArrayFood);
          } else {
            this.errorThorwn.next(' ERROR OCCURED : Data Empty ');
            console.log('ERROR ', this.errorThorwn);
          }
        },
        (error) => {
          this.errorThorwn.next(
            ' FoodServiceService :: ERROR OCCURED : Please check your connection'
          );
        }
      );
  }

  setListElement(categorie: string) {
    foods.VEGETABLES.forEach((element) => {
      const newFoodElement = new ShoppingItem(
        null,
        element.name,
        element.unit,
        element.quantity,
        element.price,
        element.photoURL
      );
      this.httpFoodService
        .postFoodCategorie(categorie, newFoodElement)
        .subscribe(
          (data) => {
            console.log('DATA  = ', data);
          },
          (error) => {
            this.errorThorwn.next(
              'ERROR OCCURED : Please check your connection'
            );
            console.log('ERROR  = ', this.errorThorwn);
          }
        );
    });
  }

  updateFoodElement(
    newElement: ShoppingItem,
    categorie: string,
    ref: string,
    sourceCategorie: string,
    addToFavorite: boolean
  ): boolean {
    let isUpdates: boolean;
    if (sourceCategorie) {
        newElement.categorie = sourceCategorie;
    }
    this.httpFoodService.setFoodCategorie(categorie, newElement, ref).subscribe(
      (DataResponse) => {
        console.log('WAL :: GET DataResponse ', DataResponse);
        console.log('WAL :: GET DataResponse REF ', DataResponse.ref);
        const index = this.shoppingArrayFood.indexOf(this.getFoodElement(ref));
        this.shoppingArrayFood[index] = DataResponse;
        // tslint:disable-next-line: max-line-length
        console.log('addToFavorite ==> ', addToFavorite);
        console.log('DataResponse.quantity ==> ', DataResponse.quantity);
        // tslint:disable-next-line: max-line-length
        // check if the addtoFavories is true, then calling the same function " updateFoodElement "  to send request again to add the food item to the favories table
        isUpdates =
            addToFavorite
              ? this.updateFoodElement(
                DataResponse,
                Categorie.categorieType('CATEGORIE_FAVORIES'),
                ref,
                categorie,
                false )
              : true;
        console.log('return isUpdated ', isUpdates);
      },
      (error) => {
        console.log('ERROR = ', error);
        this.errorThorwn.next('ERROR OCCURED : Please check your connection');
        isUpdates = false;
      }
    );
    return isUpdates;
  }

  postFoodElement(categorie: string, newFoodElement: ShoppingItem): boolean {
    console.log('WAL :: FoodServiceService postFoodElement');
    let isPost: boolean;
    this.httpFoodService.postFoodCategorie(categorie, newFoodElement).subscribe(
      (data) => {
        console.log('FoodServiceService DATA  = ', data);
        isPost = true;
      },
      (error) => {
        this.errorThorwn.next('ERROR OCCURED : Please check your connection');
        console.log('ERROR  = ', this.errorThorwn);
        isPost = false;
      }
    );
    return isPost;
  }

  getFoodArray(): ShoppingItem[] {
    return this.shoppingArrayFood;
  }

  getFoodList(): Subject<ShoppingItem[]> {
    return this.listFood;
  }

  setFoodList(arrayFood: ShoppingItem[]) {
    this.listFood.next(arrayFood);
  }

  unsubscibeComponent() {
    this.shoppingArrayFood = null;
    this.errorThorwn = new Subject<string>();
  }

  getFoodElement(reference: string): ShoppingItem {
    console.log(' CHECK ARRAY  ', this.shoppingArrayFood);
    if (this.shoppingArrayFood) {
      console.log('Reference ', reference);
      return this.shoppingArrayFood.find(
        (element) => element.ref === reference
      );
    }
  }

  deleteFoodElement(categorie: string, foodElement: ShoppingItem) {
    this.httpFoodService.deleteItem(categorie, foodElement).subscribe(
      responseData => {
        const index = this.shoppingArrayFood.indexOf(foodElement);
        console.log('INDEX : ==> ', index);
        this.shoppingArrayFood.splice(index, 1);
        this.updateFoodElement(foodElement, foodElement.categorie, foodElement.ref, null, false);
      }
    );
  }
}
