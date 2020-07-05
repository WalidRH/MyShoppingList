import { Categorie } from './../../Categorie';
import { FoodServiceService } from './../../food-service.service';
import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ShoppingItem } from '../../../shared/shopping-item';

@Component({
  selector: 'app-food-content',
  templateUrl: './food-content.component.html',
  styleUrls: ['./food-content.component.scss']
})
export class FoodContentComponent implements OnInit, OnChanges {

  @Input() foodElement: ShoppingItem;
  @Input() categorie: string;
  isSet: boolean;
  isInFavoriteComp: boolean;
  @Output() navigation = new EventEmitter<{isNavigate: boolean}>();
  constructor(private route: Router, private actualRoute: ActivatedRoute, private foodService: FoodServiceService) { }

  ngOnInit(): void {
    console.log('WAL :: Loading My List ... ');
    console.log('WAL :: Food Array   : ==> ', this.foodService.getFoodArray());
    console.log('WAL :: GetFoodName ', this.foodElement.price);
    this.isSet = this.foodElement.price !== 0;
    console.log(this.isSet);
    this.isInFavoriteComp = (this.route.url === '/MyList' || this.route.url === '') ? true : false;
  }

  ngOnChanges() {
    console.log('--->  foodElemnt', this.foodElement);

  }

  onAddToList() {
    console.log('click');
    this.foodElement.quantity += 1;
    console.log('foodElement To Add to the List', this.foodElement);
    // tslint:disable-next-line: max-line-length
    const isUpdated = this.foodService.updateFoodElement(this.foodElement, Categorie.categorieType(this.categorie), this.foodElement.ref, null, true);

  }

  onEditFood() {
    console.log('FoodElemnt Ref ', this.foodElement.ref);
    this.route.navigate(
      ['edit', this.foodElement.ref],
      {
        relativeTo: this.actualRoute ,
        queryParamsHandling: 'preserve',
        fragment: this.categorie
      });
    this.navigation.emit({
      isNavigate: true
    });
    // scrolling to the top
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  onRemoveFromList() {
    this.foodElement.quantity = 0;
    // deleting the food element from My list
    this.foodService.deleteFoodElement(Categorie.categorieType('CATEGORIE_FAVORIES'), this.foodElement);
  }
}
