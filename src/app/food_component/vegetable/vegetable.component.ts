import { HttpFoodServiceService } from './../../shared/httpServices/http-food-service.service';
import { Component, OnInit } from '@angular/core';
import { FoodServiceService } from 'src/app/shared/food-service.service';

@Component({
  selector: 'app-vegetable',
  templateUrl: './vegetable.component.html',
  styleUrls: ['./vegetable.component.scss']
})
export class VegetableComponent implements OnInit {
  categorie: string;
  constructor(private foodService: FoodServiceService) { 
  }

  ngOnInit(): void {
    this.categorie = "CATEGORIE_VEGETABLES";
    //this.foodService.setListElement("VEGETABLES");
    console.log("Vegetable Componenet ");
   this.foodService.setArray(this.categorie);
  }
}