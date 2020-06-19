import { FoodServiceService } from './../../food-service.service';
import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ShoppingItem } from '../../../shared/shopping-item'

@Component({
  selector: 'app-food-content',
  templateUrl: './food-content.component.html',
  styleUrls: ['./food-content.component.scss']
})
export class FoodContentComponent implements OnInit, OnChanges {

  @Input() foodElement : ShoppingItem;
  @Input() categorie : string;
  isSet : boolean;
  @Output() navigation = new EventEmitter<{isNavigate : boolean}>();
  constructor(private route: Router, private actualRoute: ActivatedRoute, private foodService :FoodServiceService) { }

  ngOnInit(): void {
    console.log("WAL :: GetFoodName ",this.foodElement.price);
    this.isSet = this.foodElement.price !== 0;
    console.log(this.isSet);
  }

  ngOnChanges(){
    console.log("--->  foodElemnt", this.foodElement);

  }

  onAddToList(){
    console.log("click");
  }

  onEditFood(){
    console.log("FoodElemnt Ref ", this.foodElement);
    this.route.navigate(
      ['edit',this.foodElement.ref],
      {
        relativeTo: this.actualRoute ,
        queryParamsHandling: 'preserve',
        fragment: this.categorie
      });
    this.navigation.emit({
      isNavigate: true
    });
  }
}
