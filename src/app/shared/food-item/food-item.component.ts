import { ShoppingItem } from 'src/app/shared/shopping-item.js';
import { Component, OnInit, Input, OnDestroy, OnChanges } from '@angular/core';
import { FoodServiceService } from '../food-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.scss']
})
export class FoodItemComponent implements OnInit, OnChanges, OnDestroy {

  foodArray: ShoppingItem[];
  @Input() categorie: string;
  activatedRouteOutlet: boolean = false;
  errorOccurred : String = null;
  subscription : Subscription;
  constructor(private foodService: FoodServiceService) { }

  ngOnInit(): void {
    console.log("Fod Array : ", this.foodArray);
    console.log("categorie ", this.categorie);
    console.log("Is error ",this.foodService.errorThorwn);
    if (!this.foodService.errorThorwn){
      this.subscription = this.foodService.getFoodList().subscribe(
        arrayFood => {
          console.log("SETTING new array of food");
          this.foodArray = arrayFood;
          console.log(" this.foodArray  ", this.foodService);
        }
      );
    }else{
      this.subscription = this.foodService.errorThorwn.subscribe(
        errorMessage => {
          this.errorOccurred = errorMessage;
          console.log("ERROR OCCURRED : ",this.errorOccurred);

        }
      );
    }

  }

  ngOnChanges() {
    console.log("ARRAY categorie : ", this.foodService.getFoodArray());
  }

  checkIsNavigate(navigateChecks: { isNavigate: boolean }) {
    this.activatedRouteOutlet = navigateChecks.isNavigate;
    console.log("activatedRouteOutlet ", this.activatedRouteOutlet);

  }

  ngOnDestroy(){
    this.errorOccurred = null;
    this.subscription.unsubscribe();
    this.foodService.unsubscibeComponent();
  }
}
