import { ShoppingItem } from 'src/app/shared/shopping-item.js';
import { Component, OnInit, Input, OnDestroy, OnChanges } from '@angular/core';
import { FoodServiceService } from '../food-service.service';
import { Subscription } from 'rxjs';
import { take, exhaustMap } from 'rxjs/operators';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.scss']
})
export class FoodItemComponent implements OnInit, OnChanges, OnDestroy {

  foodArray: ShoppingItem[];
  @Input() categorie: string;
  activatedRouteOutlet: boolean = false;
  errorOccurred: string = null;
  subscription: Subscription;
  constructor(private foodService: FoodServiceService) { }

  ngOnInit(): void {
    this.subscription = this.foodService.getFoodList().subscribe(
      arrayFood => {
        console.log('SETTING new array of food');
        this.foodArray = arrayFood;
        console.log(' this.foodArray  ', this.foodService);
      }
    );
    this.subscription = this.foodService.errorThorwn.subscribe(
      errorMessage => {
        this.errorOccurred = errorMessage;
        console.log('ERROR OCCURRED : ', this.errorOccurred);

      }
    );
  }

  ngOnChanges() {
    console.log('ARRAY categorie : ', this.foodService.getFoodArray());
  }

  checkIsNavigate(navigateChecks: { isNavigate: boolean }) {
    this.activatedRouteOutlet = navigateChecks.isNavigate;
    console.log('activatedRouteOutlet ', this.activatedRouteOutlet);

  }

  ngOnDestroy() {
    this.errorOccurred = null;
    this.subscription.unsubscribe();
    this.foodService.unsubscibeComponent();
  }
}
